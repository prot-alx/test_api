import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { CreateOrderProductDTO, UpdateOrderProductDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { OrderProduct } from './model/order-products.model';

@Controller('order-products')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Post()
  @ApiTags('Orders')
  createOrderProduct(
    @Body() createOrderProductDTO: CreateOrderProductDTO,
  ): Promise<OrderProduct> {
    return this.orderProductService.createOrderProduct(createOrderProductDTO);
  }

  @Put(':id')
  @ApiTags('Orders')
  updateOrderProduct(
    @Param('id') id: number,
    @Body() updateOrderProductDTO: UpdateOrderProductDTO,
  ): Promise<OrderProduct> {
    return this.orderProductService.updateOrderProduct(
      id,
      updateOrderProductDTO,
    );
  }

  @Delete(':id')
  @ApiTags('Orders')
  deleteOrderProduct(@Param('id') id: number): Promise<void> {
    return this.orderProductService.deleteOrderProduct(id);
  }

  @Get(':id')
  @ApiTags('Orders')
  findOrderProductById(@Param('id') id: number): Promise<OrderProduct> {
    return this.orderProductService.findOrderProductById(id);
  }

  @Get()
  @ApiTags('Orders')
  findAllOrderProducts(): Promise<OrderProduct[]> {
    return this.orderProductService.findAllOrderProducts();
  }
}
