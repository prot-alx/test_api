// auth.service.ts
import { TokenService } from './../token/token.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { CreateUserDTO } from '../users/dto';
import { AppError } from 'src/common/constants/errors';
import { UserLoginDTO } from './dto';
import * as bcrypt from 'bcrypt';
import { AuthUserResponse } from './response';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUsers(dto: CreateUserDTO): Promise<CreateUserDTO> {
    const existUserPhone = await this.userService.findUserByNumber(dto.phone);
    const existUserEmail = await this.userService.findUserByEmail(dto.email);

    if (existUserEmail) {
      throw new BadRequestException(AppError.USER_EMAIL_EXISTS);
    } else if (existUserPhone) {
      throw new BadRequestException(AppError.USER_PHONE_EXISTS);
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    type CreateUserWithRoleDTO = CreateUserDTO & { role: string };

    const userToCreate: CreateUserWithRoleDTO = {
      ...dto,
      password: hashedPassword,
      role: 'user',
    };

    return this.userService.createUser(userToCreate);
  }

  async loginUser(dto: UserLoginDTO): Promise<AuthUserResponse> {
    const existUser = await this.userService.findUserByEmail(dto.email);
    if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXISTS);

    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA);

    const userData = {
      id: existUser.id,
      first_name: existUser.first_name,
      last_name: existUser.last_name,
      email: existUser.email,
      role: existUser.role,
    };

    const token = await this.tokenService.generateJwtToken(userData);

    const user = await this.userService.publicUser(dto.email);

    return { ...user, token };
  }
}
