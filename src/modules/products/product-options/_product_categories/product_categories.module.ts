import { Module } from '@nestjs/common';
import { ProductCategoriesController } from './product_categories.controller';
import { ProductCategoriesService } from './product_categories.service';

@Module({
  controllers: [ProductCategoriesController],
  providers: [ProductCategoriesService]
})
export class ProductCategoriesModule {}
