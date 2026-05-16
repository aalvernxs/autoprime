import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService { 

  private logado = false;

    constructor(private router: Router) {}

    login(email: string, senha : string ): boolean {
      if (email === 'admin' && senha === 'admin'){
        this.logado = true;
        return true;

      }
      return false;
    }

    logout(): void {
      this.logado = false;
      this.router.navigate(['/login'])

    }
    islogado(): boolean{
      return this.logado;
    }
}
