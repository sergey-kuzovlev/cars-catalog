import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadCars } from "../../actions";
import { ICar } from "../../interfaces/car.interface";
import * as carService from "../../services/car.service";
import SortLink from "../../containers/Filters";

export const CarsTable: React.FC<any> = ({cars, dispatch}) => {
  useEffect(() => {
    carService.getCarsList()
    .then((cars: ICar[]) => {
      dispatch(loadCars(cars))
    })
  }, [dispatch]);

  return (
    <div className="container px1">
      <SortLink />
      {(
        <div className="row">
          {cars && cars.filteredCars && cars.filteredCars.map((car: ICar) => (
            <Link 
            className="col tile s3" 
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
