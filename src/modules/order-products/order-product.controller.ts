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

@Controller('order-products')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Post()
  @ApiTags('Orders')
  createOrderProduct(@Body() createOrderProductDTO: CreateOrderProductDTO) {
    return this.orderProductService.createOrderProduct(createOrderProductDTO);
  }

  @Put(':id')
  @ApiTags('Orders')
  updateOrderProduct(
    @Param('id') id: number,
    @Body() updateOrderProductDTO: UpdateOrderProductDTO,
  ) {
    return this.orderProductService.updateOrderProduct(
      id,
      updateOrderProductDTO,
    );
  }

  @Delete(':id')
  @ApiTags('Orders')
  deleteOrderProduct(@Param('id') id: number) {
    return this.orderProductService.deleteOrderProduct(id);
  }

  @Get(':id')
  @ApiTags('Orders')
  findOrderProductById(@Param('id') id: number) {
    return this.orderProductService.findOrderProductById(id);
  }

  @Get()
  @ApiTags('Orders')
  findAllOrderProducts() {
    return this.orderProductService.findAllOrderProducts();
  }
}
