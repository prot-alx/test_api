import { IsString, IsNumber, IsBoolean, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsNumber()
  clothesId: number;

  @ApiProperty()
  @IsNumber()
  materialId: number;

  @ApiProperty()
  @IsNumber()
  brandId: number;

  @ApiProperty()
  @IsBoolean()
  isSale: boolean;

  @ApiProperty()
  @IsNumber()
  discount: number;

  @ApiProperty()
  @IsNumber()
  salePrice: number;

  @ApiProperty()
  @IsArray()
  categories: number[];

  @ApiProperty()
  @IsArray()
  colors: number[];

  @ApiProperty()
  @IsArray()
  sizes: number[];
}
