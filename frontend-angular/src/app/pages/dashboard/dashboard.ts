import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { CarService } from '../../services/car';
import { Car } from '../../models/car.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  cars = signal<Car[]>([]);
  totalCarros = computed(() => this.cars().length);
  mediaPreco = computed(() => {
    const cars = this.cars();
    if (cars.length === 0) {
      return 0;
    }

    return cars.reduce((acc, c) => acc + c.preco, 0) / cars.length;
  });
  carroMaisCaro = computed(() => {
    const cars = this.cars();
    return cars.length > 0 ? cars.reduce((a, b) => a.preco > b.preco ? a : b) : undefined;
  });
  carroMaisBarato = computed(() => {
    const cars = this.cars();
    return cars.length > 0 ? cars.reduce((a, b) => a.preco < b.preco ? a : b) : undefined;
  });

  porMarca = computed(() => this.agrupar('marca'));
  porAno = computed(() => this.agrupar('ano').sort((a: any, b: any) => b.ano - a.ano));
  porCombustivel = computed(() => this.agrupar('combustivel'));

  colunasMarca = ['marca', 'quantidade'];
  colunasAno = ['ano', 'quantidade'];
  colunasCombustivel = ['combustivel', 'quantidade'];

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carService.getAll().subscribe({
      next: (cars) => {
        this.cars.set(cars);
      },
      error: (err) => console.error('Erro ao buscar carros:', err)
    });
  }

  agrupar(campo: keyof Car): any[] {
    const mapa: { [key: string]: number } = {};
    this.cars().forEach(car => {
      const valor = String(car[campo]);
      mapa[valor] = (mapa[valor] || 0) + 1;
    });
    return Object.entries(mapa).map(([key, quantidade]) => ({
      [campo]: key,
      quantidade
    }));
  }

  voltar() {
    this.router.navigate(['/admin']);
  }
}