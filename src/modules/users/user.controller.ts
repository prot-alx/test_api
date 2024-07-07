import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.createUser(createUserDTO);
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
