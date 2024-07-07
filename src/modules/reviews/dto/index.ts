import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateReviewDTO {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsString()
  text: string;
}

export class UpdateReviewDTO {
  @ApiProperty()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsString()
  text: string;
}
