import { Injectable } from '@angular/core';
import { Car } from '../models/car.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


private cars: Car[] = [
  {
    id: 1, marca: 'Honda', modelo: 'Civic EXL 2.0', ano: 2023, preco: 145000, km: 15000, combustivel: 'Flex',
    fotos: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600'
    ],
    descricao: 'O Honda Civic EXL 2.0 é sinônimo de confiabilidade e sofisticação. Com motor 2.0 flex de 155 cavalos, oferece desempenho equilibrado para o dia a dia e viagens longas. Seu interior premium conta com central multimídia, bancos em couro, teto solar e sistema de segurança Honda Sensing. Um dos sedãs mais vendidos do Brasil, combina economia de combustível com conforto de alto nível.'
  },
  {
    id: 2, marca: 'Toyota', modelo: 'Corolla XEi', ano: 2022, preco: 138000, km: 32000, combustivel: 'Flex',
    fotos: [
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600'
    ],
    descricao: 'O Toyota Corolla XEi é um dos sedãs mais icônicos do mundo, reconhecido pela sua durabilidade e baixo custo de manutenção. Com motor 2.0 flex de 177 cavalos e câmbio CVT, entrega uma condução suave e eficiente. Equipado com central multimídia Toyota Connect, controle de cruzeiro adaptativo e assistente de manutenção de faixa.'
  },
  {
    id: 3, marca: 'BMW', modelo: 'X5 xDrive', ano: 2023, preco: 420000, km: 8000, combustivel: 'Gasolina',
    fotos: [
      'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=600',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600'
    ],
    descricao: 'O BMW X5 xDrive representa o ápice do luxo e da performance em SUVs. Com tração integral inteligente xDrive, motor 3.0 turbo de 340 cavalos e suspensão adaptativa, oferece uma experiência de condução incomparável tanto na cidade quanto em terrenos adversos. Interior com acabamento em couro Merino, painel digital iDrive e sistema de som Harman Kardon.'
  },
  {
    id: 4, marca: 'Ford', modelo: 'Mustang GT', ano: 2021, preco: 320000, km: 21000, combustivel: 'Gasolina',
    fotos: [
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600',
      'https://images.unsplash.com/photo-1584345604476-8ec5e3f9528b?w=600',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600'
    ],
    descricao: 'O Ford Mustang GT é um ícone americano que dispensa apresentações. Com motor V8 5.0 aspirado de 450 cavalos, entrega uma sonoridade e performance únicas. Equipado com modos de condução personalizáveis, diferencial eletrônico MagneRide e painel digital de 12 polegadas. Para quem busca emoção pura e estilo inconfundível.'
  },
  {
    id: 5, marca: 'Audi', modelo: 'A4 Prestige', ano: 2023, preco: 290000, km: 5000, combustivel: 'Gasolina',
    fotos: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600',
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600'
    ],
    descricao: 'O Audi A4 Prestige combina design elegante com tecnologia de ponta. Seu motor 2.0 TFSI de 190 cavalos com câmbio S-Tronic de 7 velocidades proporciona uma condução dinâmica e refinada. Virtual Cockpit de 12.3 polegadas, sistema MMI Navigation Plus e faróis Full LED Matrix fazem deste sedã uma referência em inovação.'
  },
  {
    id: 6, marca: 'Jeep', modelo: 'Compass Limited', ano: 2022, preco: 175000, km: 18000, combustivel: 'Flex',
    fotos: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600',
      'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=600'
    ],
    descricao: 'O Jeep Compass Limited é o SUV perfeito para quem não abre mão de versatilidade e conforto. Com motor 1.3 turbo flex de 185 cavalos, câmbio automático de 6 velocidades e tração 4x2, é ideal para o uso urbano com personalidade off-road. Central multimídia Uconnect de 10.1 polegadas, assistentes de segurança e amplo espaço interno completam o pacote.'
  },
];

  getAll(): Car[] {
    return this.cars;
  }

  // Novo método: retorna Observable consumindo o backend
  fetchAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/cars`);
  }

  fetchById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/cars/${id}`);
  }

  create(car: Partial<Car>): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}/cars`, car);
  }

  updateRemote(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/cars/${car.id}`, car);
  }

  deleteRemote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/cars/${id}`);
  }

  getById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }

  add(car: Car): void {
    car.id = this.cars.length + 1;
    this.cars.push(car);
  }

  update(carAtualizado: Car): void {
    const index = this.cars.findIndex(c => c.id === carAtualizado.id);
    if (index !== -1) {
      this.cars[index] = carAtualizado;
    }
  }

  delete(id: number): void {
    this.cars = this.cars.filter(car => car.id !== id);
  }
}