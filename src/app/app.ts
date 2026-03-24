import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { Nav } from "./layout/nav/nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
  // template: '<h1>Hello</h1>',
  // styles: ['h1 { border:1px solid black; }']
})
export class App {
  protected readonly title = signal('TF_SAP250026_DevenirDev2__Angular');
}
