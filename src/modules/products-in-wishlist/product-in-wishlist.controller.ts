import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ProductInWishlistService } from './product-in-wishlist.service';
import { CreateProductInWishlistDTO } from './dto';

@Controller('products-in-wishlist')
export class ProductInWishlistController {
  constructor(
    private readonly productInWishlistService: ProductInWishlistService,
  ) {}

  @Post()
  createProductInWishlist(
    @Body() createProductInWishlistDTO: CreateProductInWishlistDTO,
  ) {
    return this.productInWishlistService.createProductInWishlist(
      createProductInWishlistDTO,
    );
  }

  @Delete(':id')
  deleteProductInWishlist(@Param('id') id: number) {
    return this.productInWishlistService.deleteProductInWishlist(id);
  }

  @Get(':id')
  findProductInWishlistById(@Param('id') id: number) {
    return this.productInWishlistService.findProductInWishlistById(id);
  }

  @Get()
  findAllProductsInWishlist() {
    return this.productInWishlistService.findAllProductsInWishlist();
  }
}
