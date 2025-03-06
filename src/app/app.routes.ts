import { Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'pokemons', component: PokemonsComponent },
    { path: 'generations', component: GenerationsComponent }
];
