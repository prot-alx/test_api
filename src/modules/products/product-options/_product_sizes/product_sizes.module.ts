import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductSizeController } from './product_sizes.controller';
import { ProductSizeService } from './product_sizes.service';
import { ProductSize } from './model/product_size.model';
import { Product } from '../../models/product.model';
import { Size } from '../../product-options/sizes/model/size.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductSize, Product, Size])],
  controllers: [ProductSizeController],
  providers: [ProductSizeService],
})
export class ProductSizeModule {}
