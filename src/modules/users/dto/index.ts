import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  first_name: string = 'None';

  @ApiProperty()
  @IsString()
  @IsOptional()
  last_name: string = 'None';

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string = 'None';

  @ApiProperty()
  @IsString()
  @IsOptional()
  zip_code: string = 'None';

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  country_id: number = 1;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  city_id: number = 1;

  @ApiProperty()
  @IsString()
  @IsOptional()
  role: string = 'user';

  constructor(partial: Partial<CreateUserDTO> = {}) {
    Object.assign(this, partial);
  }
}

export class UpdateUserDTO {
  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  zip_code: string;

  @ApiProperty()
  @IsNumber()
  country_id: number;

  @ApiProperty()
  @IsNumber()
  city_id: number;
}
