import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCard } from '../car-card/car-card';
import { Car } from '../models/car.models';
import { CarService } from '../services/car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarCard],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars = this.carService.getAll();
  }
}