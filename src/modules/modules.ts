import { AuthModule } from './auth/auth.module';
import { CityModule } from './cities/city.module';
import { CountryModule } from './countries/country.module';
import { ImageUploadModule } from './image-upload/image-upload.module';
import { OrderProductModule } from './order-products/order-product.module';
import { OrderStatusModule } from './order-statuses/order-status.module';
import { OrderModule } from './orders/order.module';
import {
  ProductModule,
  ClothesModule,
  MaterialModule,
  BrandModule,
  SizeModule,
  ColorModule,
  CategoryModule,
  ProductCategoryModule,
  ProductColorModule,
  ProductSizeModule,
} from './products';
import { ProductInCartModule } from './products-in-cart/product-in-cart.module';
import { ProductInWishlistModule } from './products-in-wishlist/product-in-wishlist.module';
import { RecentlyViewedModule } from './recently-viewed/recently-viewed.module';
import { ReviewLikeModule } from './review-likes/review-like.module';
import { ReviewModule } from './reviews/review.module';
import { TokenModule } from './token/token.module';
import { UserModule } from './users/user.module';

export const modules = [
  UserModule,
  AuthModule,
  TokenModule,
  ProductModule,
  ClothesModule,
  MaterialModule,
  BrandModule,
  SizeModule,
  ColorModule,
  CategoryModule,
  ProductCategoryModule,
  ProductColorModule,
  ProductSizeModule,
  CityModule,
  CountryModule,
  OrderProductModule,
  OrderStatusModule,
  OrderModule,
  ProductInCartModule,
  ProductInWishlistModule,
  RecentlyViewedModule,
  ReviewLikeModule,
  ReviewModule,
  TokenModule,
  AuthModule,
  UserModule,
  ImageUploadModule,
];
