import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO, UpdateOrderDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { Order } from './model/orders.model';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiTags('Orders')
  createOrder(@Body() createOrderDTO: CreateOrderDTO): Promise<Order> {
    return this.orderService.createOrder(createOrderDTO);
  }

  @Put(':id')
  @ApiTags('Orders')
  updateOrder(
    @Param('id') id: number,
    @Body() updateOrderDTO: UpdateOrderDTO,
  ): Promise<Order> {
    return this.orderService.updateOrder(id, updateOrderDTO);
  }

  @Delete(':id')
  @ApiTags('Orders')
  deleteOrder(@Param('id') id: number): Promise<void> {
    return this.orderService.deleteOrder(id);
  }

  @Get(':id')
  @ApiTags('Orders')
  findOrderById(@Param('id') id: number): Promise<Order> {
    return this.orderService.findOrderById(id);
  }

  @Get()
  @ApiTags('Orders')
  findAllOrders(): Promise<Order[]> {
    return this.orderService.findAllOrders();
  }
}
