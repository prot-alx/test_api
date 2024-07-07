import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OrderProduct } from './model/order-products.model';
import { CreateOrderProductDTO, UpdateOrderProductDTO } from './dto';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectModel(OrderProduct)
    private readonly orderProductModel: typeof OrderProduct,
  ) {}

  async createOrderProduct(
    createOrderProductDTO: CreateOrderProductDTO,
  ): Promise<OrderProduct> {
    return await this.orderProductModel.create(createOrderProductDTO);
  }

  async updateOrderProduct(
    id: number,
    updateOrderProductDTO: UpdateOrderProductDTO,
  ): Promise<OrderProduct> {
    const orderProduct = await this.orderProductModel.findByPk(id);
    if (!orderProduct) {
      throw new NotFoundException(`OrderProduct with ID ${id} not found`);
    }
    await orderProduct.update(updateOrderProductDTO);
    return orderProduct.reload();
  }

  async deleteOrderProduct(id: number): Promise<void> {
    const orderProduct = await this.orderProductModel.findByPk(id);
    if (!orderProduct) {
      throw new NotFoundException(`OrderProduct with ID ${id} not found`);
    }
    await orderProduct.destroy();
  }

  async findOrderProductById(id: number): Promise<OrderProduct> {
    const orderProduct = await this.orderProductModel.findByPk(id);
    if (!orderProduct) {
      throw new NotFoundException(`OrderProduct with ID ${id} not found`);
    }
    return orderProduct;
  }

  async findAllOrderProducts(): Promise<OrderProduct[]> {
    return await this.orderProductModel.findAll();
  }
}
