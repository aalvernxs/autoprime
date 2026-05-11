import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Search } from './search/search';
import { CarListComponent } from './car-list/car-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  Header, Search,CarListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend-angular');
}
