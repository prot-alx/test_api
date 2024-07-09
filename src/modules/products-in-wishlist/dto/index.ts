import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateProductInWishlistDTO {
  @ApiProperty()
  @IsNumber()
  product_id: number;
}
