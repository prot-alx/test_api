import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ColorDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  colorCode: string;
}
