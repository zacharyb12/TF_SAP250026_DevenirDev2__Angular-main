import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product.model';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-input-component',
  imports: [FormsModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {

product : Product = {
  name : "",
  description : ""
};

@Output() emetteur : EventEmitter<Product> = new EventEmitter;


submitProduct()
{
  this.emetteur.emit(this.product);
}

}
