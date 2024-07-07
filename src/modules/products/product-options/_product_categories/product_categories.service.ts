import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductCategory } from './model/product_category.model';
import { CreateProductCategoryDTO } from './dto';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectModel(ProductCategory)
    private readonly productCategoryModel: typeof ProductCategory,
  ) {}

  async create(
    createProductCategoryDTO: CreateProductCategoryDTO,
  ): Promise<ProductCategory> {
    const productCategory = new ProductCategory();
    productCategory.productId = createProductCategoryDTO.productId;
    productCategory.categoryId = createProductCategoryDTO.categoryId;

    return productCategory.save();
  }
}
