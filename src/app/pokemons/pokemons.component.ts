import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  public pokemons = [{
    'numero': '001',
    'nom': 'Bulbizarre',
    'categorie': 'graine',
    'type': 'plante.poison',
    'taille': '0,7',
    'poids': '6,9'
  },
  {
    'numero': '002',
    'nom': 'Herbizarre',
    'categorie': 'graine',
    'type': 'plante.poison',
    'taille': '1',
    'poids': '13'
  },
  {
    'numero': '003',
    'nom': 'Florizarre',
    'categorie': 'graine',
    'type': 'plante.poison',
    'taille': '2',
    'poids': '100'
  },
  {
    'numero': '004',
    'nom': 'Salamèche',
    'categorie': 'lézard',
    'type': 'feu',
    'taille': '0,6',
    'poids': '8,5'
  },
  {
    'numero': '005',
    'nom': 'Reptincel',
    'categorie': 'flamme',
    'type': 'feu',
    'taille': '1,1',
    'poids': '19'
  },
  {
    'numero': '006',
    'nom': 'Dracaufeu',
    'categorie': 'flamme',
    'type': 'feu.vol',
    'taille': '1,7',
    'poids': '90,5'
  }]
}
