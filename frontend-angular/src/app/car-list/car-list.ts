import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Car } from '../models/car.models';
import { CarService } from '../services/car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  placeholderImage =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNFNUU3RUIiLz48dGV4dCB4PSIzMDAiIHk9IjIwOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY3NzM4NCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0Ij5TZW0gZm90bzwvdGV4dD48L3N2Zz4=';

  constructor(
    private carService: CarService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carService.fetchAll().subscribe(cars => {
      this.cars = cars;
      this.cdr.detectChanges();
    });
  }

  verDetalhes(id: number): void {
    this.router.navigate(['/carro', id]);
  }
}