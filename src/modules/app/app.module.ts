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
} from '../products/index';

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
    ClothesModule,
    MaterialModule,
    BrandModule,
    SizeModule,
    ColorModule,
    CategoryModule,
    ProductCategoryModule,
    ProductColorModule,
    ProductSizeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
