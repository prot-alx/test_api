import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SizeDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
