import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductColorController } from './product_colors.controller';
import { ProductColorService } from './product_colors.service';
import { ProductColor } from './model/product_color.model';
import { Product } from '../../models/product.model';
import { Color } from '../../product-options/colors/model/color.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductColor, Product, Color])],
  controllers: [ProductColorController],
  providers: [ProductColorService],
})
export class ProductColorModule {}
