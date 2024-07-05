import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { Product } from './models/product.model';
import { Clothes } from '../products/product-options/clothes/model/clothes.model';
import { Material } from '../products/product-options/materials/model/material.model';
import { Brand } from '../products/product-options/brands/model/brand.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, Clothes, Material, Brand])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
