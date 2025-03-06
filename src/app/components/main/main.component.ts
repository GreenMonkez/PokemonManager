import { Component } from '@angular/core';
import { GenerationsComponent } from "../generations/generations.component";
import { PokemonsComponent } from "../pokemons/pokemons.component";

@Component({
  selector: 'app-main',
  imports: [GenerationsComponent, PokemonsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
