import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_CONNECT_STRING,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
      }),
    }),
    CarsModule,
  ],
})
export class AppModule {}
