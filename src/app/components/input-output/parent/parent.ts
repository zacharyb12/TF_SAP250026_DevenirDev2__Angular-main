import { Component } from '@angular/core';
import { Enfant } from "../enfant/enfant";
import { InputChild } from "../input-child/input-child";
import { ModelInterface } from '../../../models/demo-interface';
import { MyClass } from '../../../models/demo-class';

@Component({
  selector: 'app-parent',
  imports: [Enfant, InputChild],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})

export class Parent {

  // valeur transmise à l'enfant
  valueParent = "hello";

  valueFromChild = 0;

  // methode qui peut être déclencher par l'enfant 
  handleSubmit(value : number)
  {
    this.valueFromChild = value;
  }

  // Demo 

  // une liste qui contient les valeurs réel
  listValueReel : string[]= [
    "1 test",
    "2 test",
    "3 test",
    "4 test",
  ];
// une liste qui est utilisé pour l'affichage
  listFiltered : string[] = [];

  // methode qui recupere certains éléments de la liste réel pour les envoyer dans la liste d'affichage
  handleFilter(value : string)
  {
    this.listFiltered = this.listValueReel.filter(
      v => v.includes(value)
    )
  }


  // ------------------------------------
  listModelInterface : ModelInterface[] = [];

  instanceInterface! : ModelInterface;


  instanceClasse : MyClass = new MyClass("bob" , 35);

  listModel : ModelInterface[] = [
    {
      nom : "",
      text : "",
      valeur : 0
    }
  ];
}
