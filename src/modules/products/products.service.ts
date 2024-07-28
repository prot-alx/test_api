import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { CreateProductDTO } from './dto';
import { Category } from './product-options/categories/model/category.model';
import { Color } from './product-options/colors/model/color.model';
import { Size } from './product-options/sizes/model/size.model';
import { FindAndCountOptions, Op } from 'sequelize';
import { ImageUploadService } from '../image-upload/image-upload.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  async create(
    imageFile: Express.Multer.File,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const product = new Product();
    product.name = createProductDTO.name;
    product.price = createProductDTO.price;
    product.image = createProductDTO.image;
    product.rating = createProductDTO.rating;
    product.clothesId = createProductDTO.clothesId;
    product.materialId = createProductDTO.materialId;
    product.brandId = createProductDTO.brandId;
    product.isSale = createProductDTO.isSale;
    product.discount = createProductDTO.discount;
    product.salePrice = createProductDTO.salePrice;

    await product.save();

    await product.$set('categories', createProductDTO.categories);
    await product.$set('colors', createProductDTO.colors);
    await product.$set('sizes', createProductDTO.sizes);

    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll({
      include: [Category, Color, Size],
    });
  }

  async findOne(id: number): Promise<Product> {
    return this.productModel.findOne({
      where: { id },
      include: [Category, Color, Size],
    });
  }

  async findAllSortedAndFiltered(
    sortField: string,
    sortOrder: 'ASC' | 'DESC',
    minPrice?: number,
    maxPrice?: number,
    isSale?: boolean,
    page: number = 1,
    pageSize: number = 10,
  ): Promise<{ rows: Product[]; count: number; totalPages: number }> {
    if (page < 1) {
      throw new BadRequestException('Page number must be greater than zero');
    }

    const where: any = {};

    // type Filter = {
    //   minPrice?: number;
    //   maxPrice?: number;
    //   isSale?: boolean;
    // };
    // const filter: Filter = {};
    // if (isSale) filter.isSale = true;
    // // if (minPrice) filter.minPrice = minPrice;
    // // if (maxPrice) filter.maxPrice = maxPrice;

    if (minPrice !== undefined && maxPrice !== undefined) {
      where.price = {
        [Op.and]: [{ [Op.gte]: minPrice }, { [Op.lte]: maxPrice }],
      };
    } else if (minPrice !== undefined) {
      where.price = { [Op.gte]: minPrice };
    } else if (maxPrice !== undefined) {
      where.price = { [Op.lte]: maxPrice };
    }

    if (isSale) {
      where.isSale = isSale;
    }

    // Сначала выполняем запрос для подсчета продуктов с учетом фильтров
    const totalProducts = await this.productModel.count({ where });

    // Рассчитываем общее количество страниц
    const totalPages = Math.ceil(totalProducts / pageSize);

    const options: FindAndCountOptions = {
      // where: filter,
      where,
      order: [[sortField, sortOrder]],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      include: [Category, Color, Size],
    };

    const result = await this.productModel.findAndCountAll(options);

    return {
      rows: result.rows,
      count: result.count,
      totalPages: totalPages,
    };
  }
}
