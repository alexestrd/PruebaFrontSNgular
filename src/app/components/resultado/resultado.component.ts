import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { CalculosService } from 'src/app/services/calculos.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  datoRecibido: number = 0;
  result: any;
  resultadoF: number = 0;
  resultadoPrimo: number = 0;
  resultadoFibo: number = 0;
  resultadoTria: number = 0;
  valores: boolean = false;

  constructor(private calculoService: CalculosService){

  }

  ngOnInit():void{
    this.resultados();
  }
  resultados(){
    const intervalo = interval(100);
    intervalo.subscribe(() => {
      if (this.datoRecibido != 0){
        this.result = this.calculoService.serie(this.datoRecibido);
        this.resultadoF = this.result.result;
        this.resultadoPrimo = this.result.term1;
        this.resultadoFibo = this.result.term2;
        this.resultadoTria = this.result.term3;
        this.valores = true
        }
    })
  }

  DatoEnviado(dato: number){
    this.datoRecibido = dato;
  }
}
