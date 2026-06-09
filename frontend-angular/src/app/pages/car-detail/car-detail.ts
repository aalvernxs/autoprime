import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarService } from '../../services/car';
import { Car } from '../../models/car.models';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.css'
})
export class CarDetailComponent implements OnInit {
  car = signal<Car | undefined>(undefined);
  fotoAtual = signal(0);
  carregando = signal(true);

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.carService.getById(id!).subscribe({
      next: (data) => {
        this.car.set(data);
        this.carregando.set(false);
      },
      error: () => {
        this.carregando.set(false);
        this.router.navigate(['/']);
      }
    });
}

  proximaFoto(): void { 
    const car = this.car();
    if (car) {
      this.fotoAtual.update((current) => (current + 1) % car.fotos.length);
    }
  }

  fotoAnterior(): void {
    const car = this.car();
    if (car) {
      this.fotoAtual.update((current) => (current - 1 + car.fotos.length) % car.fotos.length);
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }
}


  