import { Component, signal, input } from '@angular/core';
import { Search } from '../../search/search';
import { CarListComponent } from '../../car-list/car-list';

interface FiltroSearch {
  termo: string;
  marca: string;
  ano: string;
  preco: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Search, CarListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  filtros = signal<FiltroSearch>({
    termo: '',
    marca: '',
    ano: '',
    preco: ''
  });

  onFiltroMudou(filtro: FiltroSearch) {
    this.filtros.set(filtro);
  }
}