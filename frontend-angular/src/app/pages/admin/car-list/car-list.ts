import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../../services/car';
import { Car } from '../../../models/car.models';

@Component({
  selector: 'app-car-edit',
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
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
export class CarEditComponent implements OnInit {
  car: Car = {
    id: 0,
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
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.fetchById(id).subscribe({
      next: car => this.car = { ...car },
      error: () => this.router.navigate(['/admin'])
    });
  }

  adicionarFoto() {
    if (this.fotoUrl.trim()) {
      this.car.fotos = [...this.car.fotos, this.fotoUrl.trim()];
      this.fotoUrl = '';
    }
  }

  removerFoto(index: number) {
    this.car.fotos = this.car.fotos.filter((_, i) => i !== index);
  }

  salvar() {
    if (this.car.marca && this.car.modelo && this.car.ano && this.car.preco) {
      this.carService.updateRemote(this.car).subscribe(() => this.router.navigate(['/admin']));
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }

  cancelar() {
    this.router.navigate(['/admin']);
  }
}