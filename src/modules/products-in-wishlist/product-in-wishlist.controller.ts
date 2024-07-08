import {
  Controller,
  UseGuards,
  Post,
  Req,
  Body,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CreateProductInWishlistDTO } from './dto';
import { ProductInWishlist } from './model/products-in-wishlist.model';
import { ProductInWishlistService } from './product-in-wishlist.service';

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
  ): Promise<ProductInWishlist> {
    return this.productInWishlistService.createProductInWishlist(
      req.user.id,
      dto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserWishlist(@Req() req): Promise<ProductInWishlist[]> {
    return this.productInWishlistService.findUserWishlist(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':productId')
  async removeProductFromWishlist(
    @Req() req,
    @Param('productId') productId: number,
  ): Promise<ProductInWishlist> {
    return this.productInWishlistService.removeProductFromWishlist(
      req.user.id,
      productId,
    );
  }
}
