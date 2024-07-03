import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BrandDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
