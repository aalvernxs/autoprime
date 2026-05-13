import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CarService } from '../../../services/car';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css'
})
export class AdminPanelComponent {
  totalCarros = 0;

  constructor(
    private car: CarService,
    private router: Router
  ) {
    this.totalCarros = this.car.getAll().length;
  }

  irParaCadastro() {
    this.router.navigate(['/admin/cadastro']);
  }

  irParaHome() {
    this.router.navigate(['/']);
  }
}