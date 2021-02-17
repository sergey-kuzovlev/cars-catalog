import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  _id: string;

  @Prop()
  email: string;

  @Prop()
  passwordHash: string;

  @Prop()
  accessToken: string;

  @Prop()
  tokenExpires: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

