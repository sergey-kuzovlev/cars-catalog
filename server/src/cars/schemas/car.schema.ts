import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Car extends Document {
  @Prop()
  name: string;

  @Prop()
  make: string;

  @Prop()
  year: number;

  @Prop()
  image: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);

