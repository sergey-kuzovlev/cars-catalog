import { IUser } from "../user/types";

export interface ICar {
  _id: string;
  name: string;
  make: string;
  year: number;
  image: string;
}

export interface ICarDetailPageProps {
  match: {
    params: {
      id: string,
    }
  }
}

export interface IActionFilter { 
  type: string;
  filter: string;
}

export interface ISetCurrentUser { 
  type: string;
  payload: {
    user: IUser
  }
}

export interface ICarTableState {
  list: ICar[];
  makes: string[];
  filteredCars: ICar[];
}

export interface IFilter {
  cars: {
    makes: string[]
  }
  visibilityFilter: string;
}