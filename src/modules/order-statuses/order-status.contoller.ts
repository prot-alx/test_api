import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { OrderStatusService } from './order-status.service';
import { CreateOrderStatusDTO, UpdateOrderStatusDTO } from './dto';

@Controller('order-statuses')
export class OrderStatusController {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  @Post()
  createOrderStatus(@Body() createOrderStatusDTO: CreateOrderStatusDTO) {
    return this.orderStatusService.createOrderStatus(createOrderStatusDTO);
  }

  @Put(':id')
  updateOrderStatus(
    @Param('id') id: number,
    @Body() updateOrderStatusDTO: UpdateOrderStatusDTO,
  ) {
    return this.orderStatusService.updateOrderStatus(id, updateOrderStatusDTO);
  }

  @Delete(':id')
  deleteOrderStatus(@Param('id') id: number) {
    return this.orderStatusService.deleteOrderStatus(id);
  }

  @Get(':id')
  findOrderStatusById(@Param('id') id: number) {
    return this.orderStatusService.findOrderStatusById(id);
  }

  @Get()
  findAllOrderStatuses() {
    return this.orderStatusService.findAllOrderStatuses();
  }
}
