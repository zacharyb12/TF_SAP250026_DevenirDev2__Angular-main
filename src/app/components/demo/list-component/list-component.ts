import { Component } from '@angular/core';
import { Product } from '../product.model';
import { InputComponent } from "../input-component/input-component";

@Component({
  selector: 'app-list-component',
  imports: [InputComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {

  listProduct : Product[] = [];


  addProduct(newProduct : Product)
  {
    this.listProduct.push(newProduct);
  }

}
