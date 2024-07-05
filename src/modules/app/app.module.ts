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
import { Color } from '../products/product-options/colors/model/color.model';
import { Product } from '../products/models/product.model';
import { Size } from '../products/product-options/sizes/model/size.model';
import { Category } from '../products/product-options/categories/model/category.model';
import { ProductColor } from '../products/product-options/_product_colors/model/product_color.model';
import { ProductSize } from '../products/product-options/_product_sizes/model/product_size.model';
import { ProductCategory } from '../products/product-options/_product_categories/model/product_category.model';
import { Clothes } from '../products/product-options/clothes/model/clothes.model';
import { Material } from '../products/product-options/materials/model/material.model';
import { Brand } from '../products/product-options/brands/model/brand.model';
import { ProductModule } from '../products/products.module';

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
        ],
      }),
    }),
    UserModule,
    AuthModule,
    TokenModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
