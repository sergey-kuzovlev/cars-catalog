import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  NotFoundException,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('api/cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  public async getAllCar(
    @Res() res,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const cars = await this.carsService.findAll(
      paginationQuery,
    );
    return res.status(HttpStatus.OK).json(cars);
  }

  @Get('/:id')
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