import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
