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
import { ProductInWishlistService } from './product-in-wishlist.service';
import { CreateProductInWishlistDTO } from './dto/';
import { JwtAuthGuard } from '../../guards/jwt-guard';

@Controller('wishlist')
export class ProductInWishlistController {
  constructor(
    private readonly productInWishlistService: ProductInWishlistService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addProductToWishlist(
    @Req() req,
    @Body() dto: CreateProductInWishlistDTO,
  ) {
    return this.productInWishlistService.createProductInWishlist(
      req.user.id,
      dto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserWishlist(@Req() req) {
    return this.productInWishlistService.findUserWishlist(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':productId')
  async removeProductFromWishlist(
    @Req() req,
    @Param('productId') productId: number,
  ) {
    return this.productInWishlistService.removeProductFromWishlist(
      req.user.id,
      productId,
    );
  }
}
