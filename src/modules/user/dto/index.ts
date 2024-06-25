import { IsNumber, IsString } from "class-validator";

export class CreateUserDTO {
    @IsString()
    first_name: string

    @IsString()
    last_name: string

    @IsString()
    email: string

    @IsString()
    password: string

    @IsString()
    phone: string

    @IsString()
    address: string

    @IsString()
    zip_code: string

    @IsNumber()
    country_id: number

    @IsNumber()
    city_id: number

    @IsString()
    role: string
}