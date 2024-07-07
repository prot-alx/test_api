import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductInWishlist } from './model/products-in-wishlist.model';
import { ProductInWishlistService } from './product-in-wishlist.service';
import { ProductInWishlistController } from './product-in-wishlist.controller';

@Module({
  imports: [SequelizeModule.forFeature([ProductInWishlist])],
  controllers: [ProductInWishlistController],
  providers: [ProductInWishlistService],
})
export class ProductInWishlistModule {}
