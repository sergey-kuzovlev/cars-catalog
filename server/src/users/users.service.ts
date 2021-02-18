import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public findOneByField = async(field): Promise<User> => {
    return this.userModel.findOne(field)
  }

  public updateUser = async (email, changes): Promise<User | false> => {
    return this.userModel.findByIdAndUpdate('6011398d718c1fbd3f213fee', changes).exec()

    // return this.userModel.findOneAndUpdate(email, changes).exec()
  }

  public refreshToken = async (email: string, token: string = null): Promise<void> => {
    const changes = {
      tokenExpires: moment().add(5, 'days').format("YYYY-MM-DD"),
      token: token ? token : undefined
    }

    await this.updateUser(email, changes)
  }

  public async login(userData) {  
    const user = await this.userModel.findOne({email: userData.email})

    let accessToken;

    if(user) {
      if(await bcrypt.compare(userData.password, user.passwordHash)) {
        delete user.accessToken;
        accessToken = jwt.sign(JSON.stringify(user), 'secret')

        await this.userModel.findOneAndUpdate({email: user.email}, {
          accessToken, 
          tokenExpires: moment().add(5, 'days').format("YYYY-MM-DD")
        })
      } else {
        accessToken = false
      }
    }
    
    return accessToken
  }

  public async checkAuthToken(data) {
    const user = await this.userModel.findOne({accessToken: data.token})

    if(user && moment(new Date(), 'YYYY-MM-DD').diff(moment(user.tokenExpires, 'YYYY-MM-DD'), 'day') <= 0) {
      await this.refreshToken(user.email);

      return true;
    }

    return false
  }
}
