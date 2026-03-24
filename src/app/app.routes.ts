import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './errors/not-found/not-found';
import { Exo01Profil } from './exercices/exo01-profil/exo01-profil';
import { Parent } from './components/input-output/parent/parent';

export const routes: Routes = [
  { 
    path: 'home',
    component: Home
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'profil',
    component: Exo01Profil
  },
  {
    path : 'parent',
    component : Parent
  },

  {
    path: '**',
    component: NotFound
  }
];
