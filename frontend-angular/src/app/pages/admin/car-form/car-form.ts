import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CarService } from '../../../services/car';
import { Car } from '../../../models/car.models';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './car-form.html',
  styleUrl: './car-form.css'
})
export class CarFormComponent {
  car: Partial<Car> = {
    marca: '',
    modelo: '',
    ano: new Date().getFullYear(),
    preco: 0,
    km: 0,
    combustivel: '',
    fotos: [],
    descricao: ''
  };

  combustiveis = ['Flex', 'Gasolina', 'Etanol', 'Diesel', 'Elétrico', 'Híbrido'];

  fotoUrl = '';

  constructor(
    private Car: CarService,
    private router: Router
  ) {}

  adicionarFoto() {
    if (this.fotoUrl.trim()) {
      this.car.fotos = [...(this.car.fotos || []), this.fotoUrl.trim()];
      this.fotoUrl = '';
    }
  }

  removerFoto(index: number) {
    this.car.fotos = this.car.fotos?.filter((_, i) => i !== index);
  }

  salvar() {
    if (this.car.marca && this.car.modelo && this.car.ano && this.car.preco) {
      this.Car.add(this.car as Car);
      this.router.navigate(['/']);
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}