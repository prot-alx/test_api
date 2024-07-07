import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCountryDTO {
  @ApiProperty()
  @IsString()
  name: string;
}

export class UpdateCountryDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
