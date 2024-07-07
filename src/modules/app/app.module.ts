import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configurations from '../../configurations';
import { User } from '../users/models/user.model';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';
import {
  Color,
  Product,
  Size,
  Category,
  ProductColor,
  ProductSize,
  ProductCategory,
  Clothes,
  Material,
  Brand,
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
} from '../index';
import { City } from '../cities/model/cities.model';
import { Country } from '../countries/model/countries.model';
import { OrderProduct } from '../order-products/model/order-products.model';
import { OrderStatus } from '../order-statuses/model/order-statuses.model';
import { Order } from '../orders/model/orders.model';
import { ProductInCart } from '../products-in-cart/model/products-in-cart.model';
import { ProductInWishlist } from '../products-in-wishlist/model/products-in-wishlist.model';
import { RecentlyViewed } from '../recently-viewed/model/recently-viewed.model';
import { ReviewLike } from '../review-likes/model/review-likes.model';
import { Review } from '../reviews/model/reviews.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadModels: true,
        synchronize: true,
        logging: (msg) => console.log(msg),
        models: [
          User,
          Color,
          Product,
          Size,
          Category,
          ProductColor,
          ProductSize,
          ProductCategory,
          Clothes,
          Material,
          Brand,
          City,
          Country,
          OrderProduct,
          OrderStatus,
          Order,
          ProductInCart,
          ProductInWishlist,
          RecentlyViewed,
          ReviewLike,
          Review,
        ],
      }),
    }),
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
