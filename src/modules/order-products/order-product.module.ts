import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderProduct } from './model/order-products.model';
import { OrderProductService } from './order-product.service';
import { OrderProductController } from './order-product.controller';

@Module({
  imports: [SequelizeModule.forFeature([OrderProduct])],
  controllers: [OrderProductController],
  providers: [OrderProductService],
})
export class OrderProductModule {}
