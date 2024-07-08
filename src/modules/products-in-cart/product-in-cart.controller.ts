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
import { ProductInCart } from './model/products-in-cart.model';

@Controller('cart')
export class ProductInCartController {
  constructor(private readonly productInCartService: ProductInCartService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addProductToCart(
    @Req() req,
    @Body() dto: CreateProductInCartDTO,
  ): Promise<ProductInCart> {
    return this.productInCartService.createProductInCart(req.user.userId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserCart(@Req() req): Promise<ProductInCart[]> {
    return this.productInCartService.findUserCart(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':productId')
  async removeProductFromCart(
    @Req() req,
    @Param('productId') productId: number,
  ): Promise<ProductInCart> {
    return this.productInCartService.removeProductFromCart(
      req.user.userId,
      productId,
    );
  }
}
