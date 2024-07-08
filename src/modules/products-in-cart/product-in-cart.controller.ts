import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ProductInCartService } from './product-in-cart.service';
import { CreateProductInCartDTO } from './dto';
import { JwtAuthGuard } from '../../guards/jwt-guard';

@Controller('cart')
export class ProductInCartController {
  constructor(private readonly productInCartService: ProductInCartService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addProductToCart(@Req() req, @Body() dto: CreateProductInCartDTO) {
    return this.productInCartService.createProductInCart(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserCart(@Req() req) {
    return this.productInCartService.findUserCart(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':productId')
  async removeProductFromCart(
    @Req() req,
    @Param('productId') productId: number,
  ) {
    return this.productInCartService.removeProductFromCart(
      req.user.id,
      productId,
    );
  }
}
