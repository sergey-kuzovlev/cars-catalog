import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadCars } from "../../actions";
import { Filters } from "./Filters";
import { ICar } from "../../interfaces/car.interface";
import * as carService from "../../services/car.service";

export const CarsTable: React.FC<any> = ({cars, dispatch}) => {
  useEffect(() => {
    carService.getCarsList()
    .then((cars: ICar[]) => {
      console.log(cars)
      dispatch(loadCars(cars))
    })
  }, [dispatch]);
  
  return (
    <div className="container px1">
      <Filters />
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

export default connect()(CarsTable)
