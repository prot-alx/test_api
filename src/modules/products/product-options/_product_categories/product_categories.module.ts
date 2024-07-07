import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategoryController } from './product_categories.controller';
import { ProductCategoryService } from './product_categories.service';
import { ProductCategory } from './model/product_category.model';
import { Product } from '../../models/product.model';
import { Category } from '../../product-options/categories/model/category.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductCategory, Product, Category])],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
})
export class ProductCategoryModule {}
