import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductInCartService } from './product-in-cart.service';
import { CreateProductInCartDTO, UpdateProductInCartDTO } from './dto';

@Controller('products-in-cart')
export class ProductInCartController {
  constructor(private readonly productInCartService: ProductInCartService) {}

  @Post()
  createProductInCart(@Body() createProductInCartDTO: CreateProductInCartDTO) {
    return this.productInCartService.createProductInCart(
      createProductInCartDTO,
    );
  }

  @Put(':id')
  updateProductInCart(
    @Param('id') id: number,
    @Body() updateProductInCartDTO: UpdateProductInCartDTO,
  ) {
    return this.productInCartService.updateProductInCart(
      id,
      updateProductInCartDTO,
    );
  }

  @Delete(':id')
  deleteProductInCart(@Param('id') id: number) {
    return this.productInCartService.deleteProductInCart(id);
  }

  @Get(':id')
  findProductInCartById(@Param('id') id: number) {
    return this.productInCartService.findProductInCartById(id);
  }

  @Get()
  findAllProductsInCart() {
    return this.productInCartService.findAllProductsInCart();
  }
}
