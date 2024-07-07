import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateOrderStatusDTO {
  @ApiProperty()
  @IsString()
  name: string;
}

export class UpdateOrderStatusDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
