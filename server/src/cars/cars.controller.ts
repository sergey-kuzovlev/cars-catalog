import {
  Controller,
  Get,
  Res,
  HttpStatus,
  NotFoundException,
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
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const cars = await this.carsService.findAll(
      paginationQuery,
    );
    return res.status(HttpStatus.OK).json(cars);
  }

  @Get('/car/:id')
  public async getCar(
    @Res() res,
    @Param('id') carId: string,
  ) {
    const car = await this.carsService.findOne(
      carId,
    );
    if (!car) {
      throw new NotFoundException('car does not exist!');
    }
    return res.status(HttpStatus.OK).json(car);
  }
}
