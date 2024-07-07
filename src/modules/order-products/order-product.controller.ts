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

@Controller('order-products')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Post()
  createOrderProduct(@Body() createOrderProductDTO: CreateOrderProductDTO) {
    return this.orderProductService.createOrderProduct(createOrderProductDTO);
  }

  @Put(':id')
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
  deleteOrderProduct(@Param('id') id: number) {
    return this.orderProductService.deleteOrderProduct(id);
  }

  @Get(':id')
  findOrderProductById(@Param('id') id: number) {
    return this.orderProductService.findOrderProductById(id);
  }

  @Get()
  findAllOrderProducts() {
    return this.orderProductService.findAllOrderProducts();
  }
}
