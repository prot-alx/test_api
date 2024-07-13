import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { CreateProductDTO } from './dto';
import { Category } from './product-options/categories/model/category.model';
import { Color } from './product-options/colors/model/color.model';
import { Size } from './product-options/sizes/model/size.model';
import { FindAndCountOptions, Op } from 'sequelize';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async create(createProductDTO: CreateProductDTO): Promise<Product> {
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
  ): Promise<{ rows: Product[]; count: number }> {
    const options: FindAndCountOptions = {
      where: {},
      order: [[sortField, sortOrder]],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      include: [Category, Color, Size],
    };

    if (minPrice !== undefined) {
      options.where['price'] = { [Op.gte]: minPrice };
    }
    if (maxPrice !== undefined) {
      options.where['price'] = { [Op.lte]: maxPrice };
    }
    if (isSale !== undefined) {
      options.where['isSale'] = isSale;
    }

    return await this.productModel.findAndCountAll(options);
  }
}
