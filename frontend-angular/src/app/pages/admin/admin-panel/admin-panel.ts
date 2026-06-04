import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CarService } from '../../../services/car';
import { Car } from '../../../models/car.models';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css'
})
export class AdminPanelComponent {
  cars: Car[] = [];
  totalCarros = 0;
  colunas = ['marca', 'modelo', 'ano', 'preco', 'combustivel', 'acoes'];

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.carService.fetchAll().subscribe(cars => {
      this.cars = cars;
      this.totalCarros = cars.length;
    });
  }

  irParaCadastro() {
    this.router.navigate(['/admin/cadastro']);
  }

  irParaHome() {
    this.router.navigate(['/']);
  }

  irParaDashboard() {
  this.router.navigate(['/admin/dashboard']);
}

  editar(id: number) {
    this.router.navigate(['/admin/editar', id]);
  }

  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir este veículo?')) {
      this.carService.deleteRemote(id).subscribe(() => this.load());
    }
  }
}