import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CarService } from '../../services/car';
import { Car } from '../../models/car.models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.css'
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;
  fotoAtual=0;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.carService.getById(id);
  }

   proximaFoto(): void {
    if (this.car) {
      this.fotoAtual = (this.fotoAtual + 1) % this.car.fotos.length;
    }
  }

  fotoAnterior(): void {
    if (this.car) {
      this.fotoAtual = (this.fotoAtual - 1 + this.car.fotos.length) % this.car.fotos.length;
    }
  }


  voltar() {
    this.router.navigate(['/']);
  }
}