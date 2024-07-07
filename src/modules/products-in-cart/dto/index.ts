import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateProductInCartDTO {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNumber()
  product_quantity: number;
}

export class UpdateProductInCartDTO {
  @ApiProperty()
  @IsNumber()
  product_quantity: number;
}
