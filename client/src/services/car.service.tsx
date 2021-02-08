import axios from 'axios';
import { ICar } from '../interfaces/car.interface';

export async function getCarDetails(id: string): Promise<ICar> {
  const response = await axios.get(`http://localhost:4000/api/car/${id}`);

  return setCarData(response.data)
}

export async function getCarsList(): Promise<ICar[]> {
  const response = await axios.get(`http://localhost:4000/api/cars`);

  return response.data.map((car: ICar) => setCarData(car))
}

const setCarData = (car: ICar) => ({
  _id: car._id, 
  name: car.name, 
  make: car.make, 
  year: car.year,
  image: car.image,
})