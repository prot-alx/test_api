import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductCategoryDTO {
  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNumber()
  category_id: number;
}
