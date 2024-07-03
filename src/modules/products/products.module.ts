import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './models/product.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [SequelizeModule.forFeature([Product])],
})
export class ProductsModule {}
