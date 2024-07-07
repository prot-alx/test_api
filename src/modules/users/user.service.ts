import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    return await this.userModel.create(createUserDTO);
  }

  async updateUser(id: number, updateUserDTO: UpdateUserDTO): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await user.update(updateUserDTO);
    return user.reload();
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await user.destroy();
  }

  async findUserById(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findUserByNumber(phone: string): Promise<User | null> {
    return await this.userModel.findOne({ where: { phone } });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ where: { email } });
  }

  async publicUser(email: string) {
    return this.userModel.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
  }
}
