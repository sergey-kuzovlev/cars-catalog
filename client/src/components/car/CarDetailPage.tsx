import React, { useEffect, useState } from 'react';
import { ICar, ICarDetailPageProps } from './types';
import * as carService from "../../services/car.service";

const CarDetailPage: React.FC<ICarDetailPageProps> = (props)=> {
  const { params: { id }} = props.match;

  const defaultCarState: ICar = {
    _id: '',
    name: '',
    make: '',
    year: 0,
    image: ''
  }

  const [carDetails, setDetailsState] = useState<ICar>(defaultCarState)
    useEffect(() => {(
      async (): Promise<void> => (setDetailsState(await carService.getCarDetails(id)))
    )()}, [id]);

  return (
    <div>
      <div>{carDetails.make}</div>
      <div>{carDetails.year}</div>
      <div>{carDetails.name}</div>
    </div>
  );
};

export default CarDetailPage;