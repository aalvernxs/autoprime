import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CarService } from '../../services/car';
import { Car } from '../../models/car.models';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.css'
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.carService.getById(id);
  }

  voltar() {
    this.router.navigate(['/']);
  }
}