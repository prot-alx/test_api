import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './dto';
import { AppError } from 'src/common/errors';

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private readonly userRepository: typeof User) { }

    async hashPassword(password: string | Buffer) {
        return bcrypt.hash(password, 10);
    }

    async findUserByEmail(email: string) {
        return this.userRepository.findOne({ where: { email: email } })
    }

    async findUserByNumber(phone: string) {
        return this.userRepository.findOne({ where: { phone: phone } })
    }

    async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
        const existUserPhone = await this.findUserByNumber(dto.phone)
        const existUserEmail = await this.findUserByEmail(dto.email)

        if (existUserEmail) {
            throw new BadRequestException(AppError.USER_EMAIL_EXISTS)
        }

        else if (existUserPhone) {
            throw new BadRequestException(AppError.USER_PHONE_EXISTS)
        }

        dto.password = await this.hashPassword(dto.password);
        await this.userRepository.create({
            first_name: dto.first_name,
            last_name: dto.last_name,
            email: dto.email,
            password: dto.password,
            phone: dto.phone,
            address: dto.address,
            zip_code: dto.zip_code,
            country_id: dto.country_id,
            city_id: dto.city_id,
            role: dto.role,
        });
        return dto;
    }
}
