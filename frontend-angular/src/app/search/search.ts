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

  dropdownAberto: string | null = null;

  marcas = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Audi', 'Mercedes-Benz', 'Volkswagen', 'Nissan', 'Hyundai'];
  anos = ['2021', '2022', '2023', '2024', '2026'];
  precos = ['Até R$ 50.000', 'R$ 50.000 - R$ 100.000', 'R$ 100.000 - R$ 200.000', 'Acima de R$ 200.000'];

  toggleDropdown(categoria: string) {
    this.dropdownAberto = this.dropdownAberto === categoria? null : categoria;
  }

  selecionar(campo: string, valor: string) {
    if (campo === 'marca') this.marcaSelecionada = valor;
    if (campo === 'ano') this.anoSelecionado = valor;
    if (campo === 'preco') this.precoSelecionado = valor;
    this.dropdownAberto = null;
  }

  limpar(campo: string){
    if (campo === 'marca') this.marcaSelecionada = '';
    if (campo === 'ano') this.anoSelecionado = '';
    if (campo === 'preco') this.precoSelecionado = '';
    this.dropdownAberto = null;
  }
  
}
