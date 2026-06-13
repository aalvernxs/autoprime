import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.models';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getFiltered(marca?: string, ano?: string, preco?: string, termo?: string): Observable<Car[]> {
    let params = new HttpParams();
    
    if (marca && marca !== '') {
      params = params.set('marca', marca);
    }
    if (ano && ano !== '') {
      params = params.set('ano', ano);
    }
    if (preco && preco !== '') {
      params = params.set('preco', preco);
    }
    if (termo && termo !== '') {
      params = params.set('termo', termo);
    }
    
    return this.http.get<Car[]>(this.apiUrl, { params });
  }

  getById(id: number | string): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  add(car: Partial<Car>): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }

  update(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${car.id}`, car);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}