import {
  Controller,
  Res,
  HttpStatus,
  NotFoundException,
  Post,
  Body,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  public async getAuthToken(
    @Res() res,
    @Body() body
  ) {
    const result = await this.usersService.login(body)

    return res.send({accessToken: result})
  }

  @Get('/checktoken')
  public async checkAuthToken(
    @Res() res,
    @Query() query
    ) {
    const result = await this.usersService.checkAuthToken(query)

    return res.send({isValid: result})
  }

  @Post('/registration')
  public async registration(
    @Res() res,
    @Body() body
    ) {
    console.log('body', body)
    const result = await this.usersService.registration(body)

    return res.send({accessToken: result})
  }
}
