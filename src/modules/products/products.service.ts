import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { CreateProductDTO } from './dto';
import { Category } from './product-options/categories/model/category.model';
import { Color } from './product-options/colors/model/color.model';
import { Size } from './product-options/sizes/model/size.model';

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
}
