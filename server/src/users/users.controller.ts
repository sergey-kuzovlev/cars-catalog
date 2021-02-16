import {
  Controller,
  Res,
  HttpStatus,
  NotFoundException,
  Post,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/auth')
  public async getUser(
    @Res() res,
    @Body() body
  ) {
    const {email, password} = body;
    const user = await this.usersService.findOne(
      email,
      password,
    );

    return user ? res.status(HttpStatus.OK).json(user) : false;
  }
}
