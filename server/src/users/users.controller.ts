import {
  Controller,
  Res,
  HttpStatus,
  NotFoundException,
  Post,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/auth')
  public async getAuthToken(
    @Res() res,
    @Body() body
  ) {
    const {email, password} = body;
    const user = await this.usersService.findOne(email, password);

    let accessToken: string | false;

    if(user) {
      try {
        if(await bcrypt.compare(password, user.passwordHash)){
          accessToken = jwt.sign(JSON.stringify(user), 'secret')
        } else {
          accessToken = false;
        }
        
      } catch(e) {
        console.log(e)
      }
    }

    return accessToken ?
      res.status(HttpStatus.OK).json({ accessToken }) :
      res.status(HttpStatus.OK).json({ error: "Incorrect username or password" })
  }
}
