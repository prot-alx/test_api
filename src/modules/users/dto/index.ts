import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  first_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  last_name: string;

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
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  zip_code: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  country_id: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  city_id: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  role: string;
}

export class UpdateUserDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  first_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  last_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  zip_code: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  country_id: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  city_id: number;
}
