import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async findOne(email: string = '', password: string = ''): Promise<{accessToken: string} | false> {
    const user = await this.userModel
    .findOne({ email })
    .exec();

    let response: {accessToken: string} | false;
    if(user) {
      try {
        if(await bcrypt.compare(password, user.passwordHash)){
          response = { accessToken: jwt.sign(JSON.stringify(user), 'secret') }
        } else {
          response = false;
        }
  
        return response;
      } catch(e) {
        console.log(e)
      }
    } else return false;
  }
}
