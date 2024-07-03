import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductColorDTO {
  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNumber()
  color_id: number;
}
