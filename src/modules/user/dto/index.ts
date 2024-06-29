import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  first_name: string

  @ApiProperty()
  @IsString()
  last_name: string

  @ApiProperty()
  @IsString()
  email: string

  @ApiProperty()
  @IsString()
  password: string

  @ApiProperty()
  @IsString()
  phone: string

  @ApiProperty()
  @IsString()
  address: string

  @ApiProperty()
  @IsString()
  zip_code: string

  @ApiProperty()
  @IsNumber()
  country_id: number

  @ApiProperty()
  @IsNumber()
  city_id: number

  @ApiProperty()
  @IsString()
  role: string
}

export class UpdateUserDTO {
  @ApiProperty()
  @IsString()
  first_name: string

  @ApiProperty()
  @IsString()
  last_name: string

  @ApiProperty()
  @IsString()
  phone: string

  @ApiProperty()
  @IsString()
  address: string

  @ApiProperty()
  @IsString()
  zip_code: string

  @ApiProperty()
  @IsNumber()
  country_id: number

  @ApiProperty()
  @IsNumber()
  city_id: number
}