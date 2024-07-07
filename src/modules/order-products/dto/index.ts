import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateOrderProductDTO {
  @ApiProperty()
  @IsNumber()
  order_id: number;

  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNumber()
  quantity: number;
}

export class UpdateOrderProductDTO {
  @ApiProperty()
  @IsNumber()
  quantity: number;
}
