  import { Component,Input } from '@angular/core';
  import { CommonModule} from '@angular/common';
  import { MatCardModule } from '@angular/material/card';
  import { MatChipsModule } from '@angular/material/chips';
  import { Router } from '@angular/router';
  import { Car } from '../models/car.models';
import { MatButtonModule } from '@angular/material/button';


  @Component({
    selector: 'app-car-card',
    imports: [CommonModule, MatCardModule, MatButtonModule],
    templateUrl: './car-card.html',
    styleUrl: './car-card.css',
  })
  export class CarCard {
    @Input() car!: Car;

    constructor(private router: Router){}
      verDetalhes(){
        this.router.navigate(['/carro', this.car.id]);
      }
    

  }
