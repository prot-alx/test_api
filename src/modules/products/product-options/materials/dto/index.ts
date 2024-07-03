import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MaterialDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
