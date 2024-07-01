import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async hashPassword(password: string | Buffer) {
    return bcrypt.hash(password, 10);
  }

  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async findUserByNumber(phone: string) {
    return this.userRepository.findOne({ where: { phone: phone } });
  }

  async createUser(createUserDto: any): Promise<User> {
    const userDto = new CreateUserDTO(createUserDto);
    const errors = await validate(userDto);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }

    userDto.password = await this.hashPassword(userDto.password);

    const user = await this.userRepository.create({
      first_name: userDto.first_name,
      last_name: userDto.last_name,
      email: userDto.email,
      password: userDto.password,
      phone: userDto.phone,
      address: userDto.address,
      zip_code: userDto.zip_code,
      country_id: userDto.country_id,
      city_id: userDto.city_id,
      role: userDto.role,
    });

    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll({
      attributes: { exclude: ['password'] },
    });
  }

  async publicUser(email: string) {
    return this.userRepository.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
  }

  async updateUser(email: string, dto: UpdateUserDTO): Promise<UpdateUserDTO> {
    await this.userRepository.update(dto, { where: { email: email } });
    return dto;
  }

  async deleteUser(email: string): Promise<boolean> {
    await this.userRepository.destroy({ where: { email } });
    return true;
  }
}
