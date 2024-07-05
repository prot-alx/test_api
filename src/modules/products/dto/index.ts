import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsString,
  IsDecimal,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsNotEmpty()
  @IsNumber()
  clothesId: number;

  @IsNotEmpty()
  @IsNumber()
  materialId: number;

  @IsNotEmpty()
  @IsNumber()
  brandId: number;

  @IsOptional()
  @IsBoolean()
  isSale?: boolean;

  @IsOptional()
  @IsDecimal()
  discount?: number;

  @IsOptional()
  @IsDecimal()
  salePrice?: number;
}
