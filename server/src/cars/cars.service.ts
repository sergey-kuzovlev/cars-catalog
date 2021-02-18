import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schemas/car.schema';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name)
    private readonly carModel: Model<Car>,
  ) {}

  public findAll = (): Promise<Car[]> => (this.carModel.find().exec())

  public findOne = (carId: string): Promise<Car> => (this.carModel.findById({ _id: carId }).exec())
}
