export interface ICar {
  _id: string;
  name: string;
  make: string;
  year: number;
}

export interface ICarDetailPageProps {
  match: {
    params: {
      id: string,
    };
  },
}

export interface IAction {
  type: string;
}