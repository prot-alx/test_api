import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductSizeDTO {
  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNumber()
  size_id: number;
}
