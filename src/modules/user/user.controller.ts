import { Body, Controller, Delete, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  //Get all users ---надо сделать так, чтоб действие было доступно только из под админа
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}


@Controller('profile')
export class GetProfile {
  constructor(private readonly userService: UserService) { }

  //GET PROFILE
  @ApiTags('Profile options')
  @ApiResponse({ status: 200, type: CreateUserDTO })
  @UseGuards(JwtAuthGuard)
  @Get()
  getUser(@Req() request: any) {
    const user = request.user;
    return this.userService.publicUser(user.email);
  }

  //UPDATE PROFILE
  @ApiTags('Profile options')
  @ApiResponse({ status: 200, type: UpdateUserDTO })
  @UseGuards(JwtAuthGuard)
  @Patch()
  updateUser(@Body() updateDTO: UpdateUserDTO, @Req() request: any): Promise<UpdateUserDTO> {
    const user = request.user
    return this.userService.updateUser(user.email, updateDTO)
  }

  //DELETE PROFILE
  @ApiTags('Profile options')
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteUser(@Req() request: any) {
    const user = request.user;
    return this.userService.deleteUser(user.email);
  }
}