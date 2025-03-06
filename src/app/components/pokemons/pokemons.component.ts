import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  public pokemons: any[] = [];

  constructor(private apiSvc: ApiService) {

    for (let index = 1; index < 1026; index++) {
      this.apiSvc.getPokemon(index).subscribe({
        next: (value: any) => {
          let pokemon: object = {
            'id': index,
            'image': value.sprites.front_default,
            'nom': value.name.charAt(0).toUpperCase() + value.name.slice(1),
            'taille': (value.height) / 10,
            'poids': (value.weight) / 10
          };
          this.pokemons.push(pokemon);
        }, error: (err) => {
          console.error('Erreur', err);
        }
      });
    }

    setTimeout(() => {
      this.pokemons.sort((a: any, b: any) => a.id - b.id);
    }, 2500);

  }
}
