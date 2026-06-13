import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService { 

  private logado = false;

    constructor(private router: Router) {
      // Restaurar estado do localStorage ao inicializar
      const salvo = localStorage.getItem('autenticado');
      this.logado = salvo === 'true';
    }

    login(email: string, senha : string ): boolean {
      if (email === 'admin@local' && senha === 'admin123'){
        this.logado = true;
        localStorage.setItem('autenticado', 'true');
        return true;

      }
      return false;
    }

    logout(): void {
      this.logado = false;
      localStorage.removeItem('autenticado');
      this.router.navigate(['/login'])

    }
    islogado(): boolean{
      return this.logado;
    }
}
