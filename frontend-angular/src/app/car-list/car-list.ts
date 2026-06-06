import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Car } from '../models/car.models';
import { CarService } from '../services/car';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
export class CarListComponent implements OnInit {
  cars$!: Observable<Car[]>;
  placeholderImage = 'https://via.placeholder.com/600x400?text=Sem+Foto';

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cars$ = this.carService.getAll();
  }

  verDetalhes(id: number | string): void {
    this.router.navigate(['/carro', id]);
  }
}