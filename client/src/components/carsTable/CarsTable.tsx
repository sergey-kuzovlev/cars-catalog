import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadCars } from "../../actions";
import { Filters } from "./Filters";
import { ICar } from "../../interfaces/car.interface";
import * as carService from "../../services/car.service";
import SortLink from "../../containers/SortLink";

export const CarsTable: React.FC<any> = (state) => {
  useEffect(() => {
    carService.getCarsList()
    .then((cars: ICar[]) => {
      state.dispatch(loadCars(cars))
    })
  }, [state.dispatch]);

  return (
    <div className="container px1">
      <SortLink />
      {(
        <div className="row">
          {state.cars && state.cars.filteredCars && state.cars.filteredCars.map((car: ICar) => (
            <Link 
            className="col s3" 
            key={car._id} 
            to={`/car/${car._id}`} 
            style={{backgroundImage: `url(http://localhost:4000/${car.image ? car.image : "default.png"})`}}>
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
