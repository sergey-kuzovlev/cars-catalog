import React, { useEffect, useState } from 'react';
import { ICar, ICarDetailPageProps } from '../../interfaces/car.interface';
import * as carService from "../../services/car.service";

const CarDetailPage: React.FC<ICarDetailPageProps> = (props)=> {
  const {
    params: { id },
  } = props.match;

  const defaultCarState = {
    _id: '',
    name: '',
    make: '',
    year: 0
  }

  const [carDetails, setDetailsState] = useState<ICar>(defaultCarState)
    useEffect(() => {
      (async () => {
        setDetailsState(await carService.getCarDetails(id))
      })();
  }, [id]);

  return (
    <div>
      <div>{carDetails.make}</div>
      <div>{carDetails.year}</div>
      <div>{carDetails.name}</div>
    </div>
  );
};

export default CarDetailPage;