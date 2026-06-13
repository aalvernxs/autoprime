import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Car } from '../models/car.models';
import { CarService } from '../services/car';
import { Observable, of } from 'rxjs';

interface FiltroSearch {
  termo: string;
  marca: string;
  ano: string;
  preco: string;
}

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
export class CarListComponent {
  filtros = input<FiltroSearch>({
    termo: '',
    marca: '',
    ano: '',
    preco: ''
  });

  cars$ = signal<Observable<Car[]>>(of([]));
  placeholderImage = 'https://via.placeholder.com/600x400?text=Sem+Foto';

  constructor(
    private carService: CarService,
    private router: Router
  ) {
    this.cars$.set(this.carService.getAll());
    effect(() => {
      const filtrosAtuais = this.filtros();
      if (this.temFiltros(filtrosAtuais)) {
        this.cars$.set(this.carService.getFiltered(
          filtrosAtuais.marca,
          filtrosAtuais.ano,
          filtrosAtuais.preco,
          filtrosAtuais.termo
        ));
      } else {
        this.cars$.set(this.carService.getAll());
      }
    });
  }


  private temFiltros(filtros: FiltroSearch): boolean {
    return !!(filtros.marca || filtros.ano || filtros.preco || filtros.termo);
  }

  verDetalhes(id: number | string): void {
    this.router.navigate(['/carro', id]);
  }
}