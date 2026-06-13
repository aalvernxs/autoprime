import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  form: FormGroup;
  senhaVisivel = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.form.get('email'); }
  get senha() { return this.form.get('senha'); }

  login() {
    if (this.form.invalid) return;
    const { email, senha } = this.form.value;
    if (this.authService.login(email, senha)) {
      this.router.navigate(['/admin']);
    } else {
      alert('Email ou senha incorretos!');
    }
  }

  toggleSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }
}