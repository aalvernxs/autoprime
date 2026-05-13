import { Component, OnInit } from '@angular/core';
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
  cars: Car[] = [];
  totalCarros = 0;
  mediaPreco = 0;
  carroMaisCaro: Car | undefined;
  carroMaisBarato: Car | undefined;

  porMarca: { marca: string; quantidade: number }[] = [];
  porAno: { ano: number; quantidade: number }[] = [];
  porCombustivel: { combustivel: string; quantidade: number }[] = [];

  colunasMarca = ['marca', 'quantidade'];
  colunasAno = ['ano', 'quantidade'];
  colunasCombustivel = ['combustivel', 'quantidade'];

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cars = this.carService.getAll();
    this.totalCarros = this.cars.length;
    this.mediaPreco = this.cars.reduce((acc, c) => acc + c.preco, 0) / this.totalCarros;
    this.carroMaisCaro = this.cars.reduce((a, b) => a.preco > b.preco ? a : b);
    this.carroMaisBarato = this.cars.reduce((a, b) => a.preco < b.preco ? a : b);

    this.porMarca = this.agrupar('marca');
    this.porAno = this.agrupar('ano').sort((a: any, b: any) => b.ano - a.ano);
    this.porCombustivel = this.agrupar('combustivel');
  }

  agrupar(campo: keyof Car): any[] {
    const mapa: { [key: string]: number } = {};
    this.cars.forEach(car => {
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