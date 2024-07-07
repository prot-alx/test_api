import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDate } from 'class-validator';

export class CreateRecentlyViewedDTO {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsDate()
  created_at: Date;
}
