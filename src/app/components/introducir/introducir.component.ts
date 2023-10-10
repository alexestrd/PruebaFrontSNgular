import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-introducir',
  templateUrl: './introducir.component.html',
  styleUrls: ['./introducir.component.css']
})
export class IntroducirComponent {
  dato:number = 0;

  @Output() datoEnviado = new EventEmitter<number>();

  enviarDato() {
    // Emitir el texto al componente padre
    this.datoEnviado.emit(this.dato);
  }
}
