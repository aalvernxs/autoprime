import { Injectable } from '@angular/core';
import { Car } from '../models/car.models';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[] = [
    { id: 1, marca: 'Honda', modelo: 'Civic EXL 2.0', ano: 2023, preco: 145000, km: 15000, combustivel: 'Flex', foto: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600' },
    { id: 2, marca: 'Toyota', modelo: 'Corolla XEi', ano: 2022, preco: 138000, km: 32000, combustivel: 'Flex', foto: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600' },
    { id: 3, marca: 'BMW', modelo: 'X5 xDrive', ano: 2023, preco: 420000, km: 8000, combustivel: 'Gasolina', foto: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=600' },
    { id: 4, marca: 'Ford', modelo: 'Mustang GT', ano: 2021, preco: 320000, km: 21000, combustivel: 'Gasolina', foto: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600' },
    { id: 5, marca: 'Audi', modelo: 'A4 Prestige', ano: 2023, preco: 290000, km: 5000, combustivel: 'Gasolina', foto: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600' },
    { id: 6, marca: 'Jeep', modelo: 'Compass Limited', ano: 2022, preco: 175000, km: 18000, combustivel: 'Flex', foto: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600' },
  ];

  getAll(): Car[] {
    return this.cars;
  }

  getById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }

  add(car: Car): void {
    car.id = this.cars.length + 1;
    this.cars.push(car);
  }

  update(carAtualizado: Car): void {
    const index = this.cars.findIndex(c => c.id === carAtualizado.id);
    if (index !== -1) {
      this.cars[index] = carAtualizado;
    }
  }

  delete(id: number): void {
    this.cars = this.cars.filter(car => car.id !== id);
  }
}