import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClothesDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
