import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-input-child',
  imports: [FormsModule],
  templateUrl: './input-child.html',
  styleUrl: './input-child.css',
})
export class InputChild {

  // valeur lié à l'input
  inputChild : string = "";

  // Emetteur d'evenement ( emettre une valeur)
  @Output() emitValue :EventEmitter<string> = new EventEmitter();

// methode qui declenche l'emmission de la valeur
  sendValue()
  {
    this.emitValue.emit(this.inputChild)
  }
}
