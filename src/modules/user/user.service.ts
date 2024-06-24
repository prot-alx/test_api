import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './dto';
import { AppError } from 'src/common/errors';

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}

    async hashPassword (password: string | Buffer) {
        return bcrypt.hash(password, 10);
    }

    async findUserByEmail (email: string) {
        return this.userRepository.findOne({ where: { email: email } })
    }

    async findUserByLogin (userName: string) {
        return this.userRepository.findOne({ where : { userName: userName}})
    }

    async createUser(dto: CreateUserDTO): Promise <CreateUserDTO> {
        const existUserLogin = await this.findUserByLogin(dto.userName)
        const existUserEmail = await this.findUserByEmail(dto.email)

        if (existUserEmail) {
            throw new BadRequestException(AppError.USER_EMAIL_EXISTS)
        }

        else if (existUserLogin) {
            throw new BadRequestException(AppError.USER_USERNAME_EXISTS)
        }

        dto.password = await this.hashPassword(dto.password);
        await this.userRepository.create({
            firstName: dto.firstName,
            userName: dto.userName,
            email: dto.email,
            password: dto.password,
        });
        return dto;
    }
}
