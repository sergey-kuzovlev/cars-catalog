import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/test-app-cars-catalog',
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
      }),
    }),
    CarsModule,
  ],
})
export class AppModule {}
