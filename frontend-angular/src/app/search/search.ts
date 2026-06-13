import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule}  from "@angular/common";
import { FormsModule } from '@angular/forms';

interface FiltroSearch {
  termo: string;
  marca: string;
  ano: string;
  preco: string;
}

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  @Output() filtroMudou = new EventEmitter<FiltroSearch>();

  termoBusca = '';
  marcaSelecionada = '';
  anoSelecionado = '';
  precoSelecionado = '';

  dropdownAberto: string | null = null;

  marcas = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Audi', 'Mercedes-Benz', 'Volkswagen', 'Nissan', 'Hyundai'];
  anos = ['2021', '2022', '2023', '2024', '2026'];
  precos = [
    { label: 'Até R$ 50.000', value: 'ate-50000' },
    { label: 'R$ 50.000 - R$ 100.000', value: '50000-100000' },
    { label: 'R$ 100.000 - R$ 200.000', value: '100000-200000' },
    { label: 'Acima de R$ 200.000', value: 'acima-200000' }
  ];

  toggleDropdown(categoria: string) {
    this.dropdownAberto = this.dropdownAberto === categoria? null : categoria;
  }

  selecionar(campo: string, valor: string) {
    if (campo === 'marca') this.marcaSelecionada = valor;
    if (campo === 'ano') this.anoSelecionado = valor;
    if (campo === 'preco') this.precoSelecionado = valor;
    this.dropdownAberto = null;
    this.emitirFiltro();
  }

  limpar(campo: string){
    if (campo === 'marca') this.marcaSelecionada = '';
    if (campo === 'ano') this.anoSelecionado = '';
    if (campo === 'preco') this.precoSelecionado = '';
    this.dropdownAberto = null;
    this.emitirFiltro();
  }

  onTermoBuscaChange() {
    this.emitirFiltro();
  }

  private emitirFiltro() {
    this.filtroMudou.emit({
      termo: this.termoBusca,
      marca: this.marcaSelecionada,
      ano: this.anoSelecionado,
      preco: this.precoSelecionado
    });
  }

  limparTodos() {
    this.termoBusca = '';
    this.marcaSelecionada = '';
    this.anoSelecionado = '';
    this.precoSelecionado = '';
    this.emitirFiltro();
  }
}
