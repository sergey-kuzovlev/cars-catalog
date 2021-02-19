import axios from 'axios';
import { ICar } from '../components/car/types';

const API_URL = 'http://localhost:4000/api/'

export async function getCarDetails(id: string): Promise<ICar> {
  const response = await axios.get(`${API_URL}car/${id}`);

  return setCarData(response.data)
}

export async function getCarsList(): Promise<ICar[]> {
  const response = await axios.get(`${API_URL}cars`);

  return response.data.map((car: ICar) => setCarData(car))
}

const setCarData = (car: ICar): ICar => ({
  _id: car._id, 
  name: car.name, 
  make: car.make, 
  year: car.year,
  image: car.image,
})