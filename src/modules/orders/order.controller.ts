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

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDTO: CreateOrderDTO) {
    return this.orderService.createOrder(createOrderDTO);
  }

  @Put(':id')
  updateOrder(@Param('id') id: number, @Body() updateOrderDTO: UpdateOrderDTO) {
    return this.orderService.updateOrder(id, updateOrderDTO);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return this.orderService.deleteOrder(id);
  }

  @Get(':id')
  findOrderById(@Param('id') id: number) {
    return this.orderService.findOrderById(id);
  }

  @Get()
  findAllOrders() {
    return this.orderService.findAllOrders();
  }
}
