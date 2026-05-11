import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCard} from '../car-card/car-card';
import { Car } from '../models/car.models';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarCard],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
export class CarListComponent {
 cars: Car[] = [
  { id: 1, marca: 'Honda', modelo: 'Civic EXL 2.0', ano: 2023, preco: 145000, km: 15000, combustivel: 'Flex', foto: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600' },
  { id: 2, marca: 'Toyota', modelo: 'Corolla XEi', ano: 2022, preco: 138000, km: 32000, combustivel: 'Flex', foto: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600' },
  { id: 3, marca: 'BMW', modelo: 'X5 xDrive', ano: 2023, preco: 420000, km: 8000, combustivel: 'Gasolina', foto: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=600' },
  { id: 4, marca: 'Ford', modelo: 'Mustang GT', ano: 2021, preco: 320000, km: 21000, combustivel: 'Gasolina', foto: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600' },
  { id: 5, marca: 'Audi', modelo: 'A4 Prestige', ano: 2023, preco: 290000, km: 5000, combustivel: 'Gasolina', foto: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600' },
  { id: 6, marca: 'Jeep', modelo: 'Compass Limited', ano: 2022, preco: 175000, km: 18000, combustivel: 'Flex', foto: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600' },
];
}