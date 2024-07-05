import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsString()
  @IsOptional()
  readonly image?: string;

  @IsNumber()
  @IsOptional()
  readonly rating?: number;

  @IsNumber()
  readonly clothesId: number;

  @IsNumber()
  readonly materialId: number;

  @IsNumber()
  readonly brandId: number;

  @IsBoolean()
  @IsOptional()
  readonly isSale?: boolean;

  @IsNumber()
  @IsOptional()
  readonly discount?: number;

  @IsNumber()
  @IsOptional()
  readonly salePrice?: number;
}
