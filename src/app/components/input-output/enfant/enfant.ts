import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enfant',
  imports: [
    FormsModule
  ],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css',
})
export class Enfant {

  // Valeur reçu par le parent
  @Input() valueFromParent : string = "default";

  // Emetteur qui permet de declencher la methode transmise
  @Output() emitValue : EventEmitter<number> = new EventEmitter();

  // valeur à transmettre au parent
  valueToSend  = 0;

  // methode de l'enfant qui declenche la methode du parent
  sendValue()
  {
    this.emitValue.emit(this.valueToSend);
  }

}
