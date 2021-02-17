import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async findOneByField(field): Promise<User> {
    return this.userModel.findOne(field)
  }

  public async updateUser(email, changes): Promise<User | false> {
    // return this.userModel.findByIdAndUpdate('6011398d718c1fbd3f213fee', changes).exec()

    return this.userModel.findOneAndUpdate(email, changes).exec()
  }
}
