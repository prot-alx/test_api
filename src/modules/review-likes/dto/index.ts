import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreateReviewLikeDTO {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  review_id: number;

  @ApiProperty()
  @IsBoolean()
  like: boolean;
}
