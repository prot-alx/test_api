import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderStatus } from './model/order-statuses.model';
import { OrderStatusService } from './order-status.service';
import { OrderStatusController } from './order-status.contoller';

@Module({
  imports: [SequelizeModule.forFeature([OrderStatus])],
  controllers: [OrderStatusController],
  providers: [OrderStatusService],
})
export class OrderStatusModule {}
