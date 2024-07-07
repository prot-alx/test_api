import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateOrderDTO {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  status_id: number;
}

export class UpdateOrderDTO {
  @ApiProperty()
  @IsNumber()
  status_id: number;
}
