import { Document } from 'mongoose';

export interface ICar extends Document {
  readonly name: string;
  readonly make: string;
  readonly year: number;
}
