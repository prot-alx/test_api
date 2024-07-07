import { Controller, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto';
import { User } from './models/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.findUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDTO: UpdateUserDTO,
  ) {
    return this.userService.updateUser(id, updateUserDTO);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
