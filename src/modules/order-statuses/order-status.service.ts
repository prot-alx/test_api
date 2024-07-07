import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OrderStatus } from './model/order-statuses.model';
import { CreateOrderStatusDTO, UpdateOrderStatusDTO } from './dto';

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectModel(OrderStatus)
    private readonly orderStatusModel: typeof OrderStatus,
  ) {}

  async createOrderStatus(
    createOrderStatusDTO: CreateOrderStatusDTO,
  ): Promise<OrderStatus> {
    return await this.orderStatusModel.create(createOrderStatusDTO);
  }

  async updateOrderStatus(
    id: number,
    updateOrderStatusDTO: UpdateOrderStatusDTO,
  ): Promise<OrderStatus> {
    const orderStatus = await this.orderStatusModel.findByPk(id);
    if (!orderStatus) {
      throw new NotFoundException(`OrderStatus with ID ${id} not found`);
    }
    await orderStatus.update(updateOrderStatusDTO);
    return orderStatus.reload();
  }

  async deleteOrderStatus(id: number): Promise<void> {
    const orderStatus = await this.orderStatusModel.findByPk(id);
    if (!orderStatus) {
      throw new NotFoundException(`OrderStatus with ID ${id} not found`);
    }
    await orderStatus.destroy();
  }

  async findOrderStatusById(id: number): Promise<OrderStatus> {
    const orderStatus = await this.orderStatusModel.findByPk(id);
    if (!orderStatus) {
      throw new NotFoundException(`OrderStatus with ID ${id} not found`);
    }
    return orderStatus;
  }

  async findAllOrderStatuses(): Promise<OrderStatus[]> {
    return await this.orderStatusModel.findAll();
  }
}
