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
import { ApiTags } from '@nestjs/swagger';

@Controller('order-statuses')
export class OrderStatusController {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  @Post()
  @ApiTags('Orders')
  createOrderStatus(@Body() createOrderStatusDTO: CreateOrderStatusDTO) {
    return this.orderStatusService.createOrderStatus(createOrderStatusDTO);
  }

  @Put(':id')
  @ApiTags('Orders')
  updateOrderStatus(
    @Param('id') id: number,
    @Body() updateOrderStatusDTO: UpdateOrderStatusDTO,
  ) {
    return this.orderStatusService.updateOrderStatus(id, updateOrderStatusDTO);
  }

  @Delete(':id')
  @ApiTags('Orders')
  deleteOrderStatus(@Param('id') id: number) {
    return this.orderStatusService.deleteOrderStatus(id);
  }

  @Get(':id')
  @ApiTags('Orders')
  findOrderStatusById(@Param('id') id: number) {
    return this.orderStatusService.findOrderStatusById(id);
  }

  @Get()
  @ApiTags('Orders')
  findAllOrderStatuses() {
    return this.orderStatusService.findAllOrderStatuses();
  }
}
