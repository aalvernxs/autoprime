import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

  
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, MatInputModule  , MatFormFieldModule, MatButtonModule, MatIconModule],  
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  senha = '';
  senhaVisivel = false;

  constructor(private router: Router) {}

  login(){
    if (this.email === 'admin' && this.senha === 'admin') {
      this.router.navigate(['/']);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
  
  toggleSenhaVisivel() {
    this.senhaVisivel = !this.senhaVisivel;
  }
}


