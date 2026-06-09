import { Component, OnInit, computed, signal } from '@angular/core';
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
export class AdminPanelComponent implements OnInit {
  cars = signal<Car[]>([]);
  totalCarros = computed(() => this.cars().length);
  colunas = ['marca', 'modelo', 'ano', 'preco', 'combustivel', 'acoes'];

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carService.getAll().subscribe({
      next: (data) => {
        this.cars.set(data);
      },
      error: (err) => console.error('Erro ao buscar carros:', err)
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
      this.carService.delete(id).subscribe({
        next: () => {
          this.cars.update((current) => current.filter(car => car.id !== id));
        },
        error: (err) => console.error('Erro ao excluir:', err)
      });
    }
  }
}