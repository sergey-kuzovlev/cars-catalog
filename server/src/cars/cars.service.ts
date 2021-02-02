import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schemas/car.schema';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name)
    private readonly carModel: Model<Car>,
  ) {}

  public async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<Car[]> {
    const { limit, offset } = paginationQuery;
    return await this.carModel
      .find()
      .skip(offset)
      .limit(limit)
      .populate('customer')
      .exec();
  }

  public async findOne(carId: string): Promise<Car> {
    const car = await this.carModel
      .findById({ _id: carId })
      .populate('customer')
      .exec();

    if (!car) {
      throw new NotFoundException(`Car #${carId} not found`);
    }
    return car;
  }
}
