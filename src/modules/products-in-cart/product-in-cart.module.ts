import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductInCart } from './model/products-in-cart.model';
import { ProductInCartService } from './product-in-cart.service';
import { ProductInCartController } from './product-in-cart.controller';

@Module({
  imports: [SequelizeModule.forFeature([ProductInCart])],
  controllers: [ProductInCartController],
  providers: [ProductInCartService],
})
export class ProductInCartModule {}
