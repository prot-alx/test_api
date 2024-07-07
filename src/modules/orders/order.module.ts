import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './model/orders.model';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
