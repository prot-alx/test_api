import { IsString } from "class-validator"

export class AuthUserResponse {
    @IsString()
    first_name: string

    @IsString()
    last_name: string

    @IsString()
    email: string

    @IsString()
    password: string
}