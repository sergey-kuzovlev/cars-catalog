import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ICar } from "./interfaces/car.interface";
import CarDetailPage from "./CarDetailPage";

export const CarsTable: React.FC = () => {
  const [cars, setItems] = useState<ICar[]>([])

    useEffect(() => {
    async function getCars() {
      const response = await fetch('http://localhost:4000/api/cars');
      if (response.status !== 400) {
        const cars = await response.json();

        setItems(cars)
      }
    }

    getCars()
  }, []);
  
  return (
    <div className="container px1">
      {(
        <div className="row">
          {cars && cars.map((car: any) => (
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
