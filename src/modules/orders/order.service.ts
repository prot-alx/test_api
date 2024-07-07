import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './model/orders.model';
import { CreateOrderDTO, UpdateOrderDTO } from './dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private readonly orderModel: typeof Order,
  ) {}

  async createOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
    return await this.orderModel.create(createOrderDTO);
  }

  async updateOrder(
    id: number,
    updateOrderDTO: UpdateOrderDTO,
  ): Promise<Order> {
    const order = await this.orderModel.findByPk(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    await order.update(updateOrderDTO);
    return order.reload();
  }

  async deleteOrder(id: number): Promise<void> {
    const order = await this.orderModel.findByPk(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    await order.destroy();
  }

  async findOrderById(id: number): Promise<Order> {
    const order = await this.orderModel.findByPk(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  async findAllOrders(): Promise<Order[]> {
    return await this.orderModel.findAll();
  }
}
