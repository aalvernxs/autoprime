import { Component } from '@angular/core';
import { CommonModule}  from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  termoBusca = '';
  marcaSelecionada = '';
  anoSelecionado = '';
  precoSelecionado = '';

  marcas = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Audi', 'Mercedes-Benz', 'Volkswagen', 'Nissan', 'Hyundai'];
  anos = ['2021, 2022, 2023, 2024', '2026'];
  precos = ['Até R$ 50.000', 'R$ 50.000 - R$ 100.000', 'R$ 100.000 - R$ 200.000', 'Acima de R$ 200.000'];
}
