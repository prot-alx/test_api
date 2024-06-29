import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO, UpdateUserDTO } from './dto';

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

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async publicUser(email: string) {
    return this.userRepository.findOne({
      where: {email},
      attributes: {exclude: ['password']}
    })
  }

  async updateUser(email: string, dto: UpdateUserDTO): Promise <UpdateUserDTO> {
    await this.userRepository.update(dto, {where: {email: email}});
    return dto;
  }

  async deleteUser(email: string) {
    await this.userRepository.destroy({where: {email}});
    return true;
  }
}
