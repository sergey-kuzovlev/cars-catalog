import React, { useEffect, useState } from 'react';
import { ICar } from './interfaces/car.interface';

const CarDetailPage: React.FC = ({ match }: any) => {
  const {
    params: { id },
  } = match;

  const [carDetails, setDetails] = useState<ICar>({name: '', make: '', year: 0})

    useEffect(() => {
    async function getCars() {
      const response = await fetch(`http://localhost:4000/api/car/${id}`);
      if (response.status !== 400) {
        const details = await response.json();

        setDetails(details)
      }
    }

    getCars()
  }, []);

  return (
    <div>
      <div>{carDetails.make}</div>
      <div>{carDetails.year}</div>
      <div>{carDetails.name}</div>
    </div>
  );
};

export default CarDetailPage;