import { Body, Controller, Delete, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('all')
  getUsers() {
    return this.userService.getUsers();
  }

  @ApiTags('API')
  @ApiResponse({status: 200, type: UpdateUserDTO})
  @UseGuards(JwtAuthGuard)
  @Patch()
  updateUser(@Body() updateDTO: UpdateUserDTO, @Req() request): Promise <UpdateUserDTO> {
    const user = request.user
    return this.userService.updateUser(user.email, updateDTO)
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteUser(@Req() request) {
    const user = request.user;
    return this.userService.deleteUser(user.email);
  }
}
