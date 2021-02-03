import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICar } from "./interfaces/car.interface";
import * as carService from "./services/car.service";

export const CarsTable: React.FC = () => {
  const [cars, setCarsList] = useState<ICar[]>([])

  useEffect(() => {
    (async () => {
      setCarsList(await carService.getCarsList())
    })();
  }, []);
  
  return (
    <div className="container px1">
      {(
        <div className="row">
          {cars && cars.map((car: ICar) => (
            <Link className="col s3" key={car._id} to={`/car/${car._id}`}>
                <div>{car.name}</div>
                <div>{car.make}</div>
                <div>{car.year}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
