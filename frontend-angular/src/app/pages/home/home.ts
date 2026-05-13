import { Component } from '@angular/core';
import { Search } from '../../search/search';

import { CarListComponent } from '../../car-list/car-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Search, CarListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}