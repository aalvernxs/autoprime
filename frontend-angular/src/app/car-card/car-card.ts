import { Component,Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Car } from '../models/car.models';


@Component({
  selector: 'app-car-card',
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './car-card.html',
  styleUrl: './car-card.css',
})
export class CarCard {
  @Input() car!: Car;

}
