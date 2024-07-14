import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { Category } from './product-options/categories/model/category.model';
import { Color } from './product-options/colors/model/color.model';
import { Size } from './product-options/sizes/model/size.model';
import { ImageUploadModule } from '../image-upload/image-upload.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Product, Category, Color, Size]),
    ImageUploadModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
