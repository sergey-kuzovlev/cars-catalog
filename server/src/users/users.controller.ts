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
import * as moment from 'moment'

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/auth')
  public async getAuthToken(
    @Res() res,
    @Body() body
  ) {
    const {email, password} = body;
    const user = await this.usersService.findOneByField({email});

    let accessToken: string | false;
    let message: string = "Incorrect username or password";

    if(user) {
      if(await bcrypt.compare(password, user.passwordHash)) {
        delete user.accessToken;
        accessToken = jwt.sign(JSON.stringify(user), 'secret')

        await this.usersService.updateUser(         //TODO: rewrite to .save()
          user.email, 
          {
            accessToken, 
            tokenExpires: moment().add(5, 'days').format("DD-MM-YYYY")
          })
      } else {
        accessToken = false;
      }
    }

    return accessToken ?
      res.status(HttpStatus.OK).json({ accessToken }) :
      res.status(HttpStatus.OK).json({ error: message })
  }
}
