import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  
  ngOnInit(): void {
    console.log("Création du composant Home");
  }
  
  ngOnDestroy(): void {
    console.log("Destruction du composant Home");
  }

}
