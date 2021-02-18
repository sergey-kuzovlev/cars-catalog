import {
  Controller,
  Get,
  Res,
  Param,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('api')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('/cars')
  public async getAllCar(
    @Res() res,
    @Query() query,
  ) {
    const cars = await this.carsService.findAll();

    return res.send(cars);
  }

  @Get('/car/:id')
  public async getCar(
    @Res() res,
    @Param('id') carId: string,
  ) {
    const car = await this.carsService.findOne(carId);

    return res.send(car);
  }
}
