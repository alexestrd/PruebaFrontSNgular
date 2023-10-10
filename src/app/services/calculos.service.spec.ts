import { TestBed } from '@angular/core/testing';

import { CalculosService } from './calculos.service';

describe('CalculosService', () => {
  let service: CalculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('debería devolver true si el número es primo', () => {
    expect(service.esPrimo(2)).toBe(true);
    expect(service.esPrimo(5)).toBe(true);
    expect(service.esPrimo(4)).toBe(false);
    
  });

  it('debería calcular el número de Fibonacci correctamente', () => {
    expect(service.fibonacci(0)).toBe(0);
    expect(service.fibonacci(1)).toBe(1);
    expect(service.fibonacci(5)).toBe(5);
   
  });
});
