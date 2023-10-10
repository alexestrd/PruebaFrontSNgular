import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }

 
  esPrimo(numero: number): boolean {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  
    primo(n: number): number {
      let count = 0;
      let numero = 2;
  
      while (count < n) {
        if (this.esPrimo(numero)) {
          count++;
        }
        numero++;
      }
  
      return numero - 1;
    }
  
  
    obtenerFibonacci(n: number): number {
      if (n <= 0) {
        return 0;
      } else if (n === 1) {
        return 1;
      } else {
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
          fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n];
      }
    }
  
  
    triangular(n: number): number {
      return ((n * (n + 1)) / 2);
    }
  
  
    serie(n: number) {
      const term1 = this.primo(n);
      const term2 = this.obtenerFibonacci(n);
      const term3 = this.triangular(n + 1);
      const result = -3 * term1 - term2 + 5 * term3;
      return {term1 , term2, term3, result};
    }
  }
  
  
  
  

