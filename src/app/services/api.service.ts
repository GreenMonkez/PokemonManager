import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGenerations() {
    return this.http.get(environment.pokeApiGeneration);
  }

  getGeneration(index: number) {
    return this.http.get(environment.pokeApiGeneration + index);
  }

  getPokemon(index: number) {
    return this.http.get(environment.pokeApiPokemon + index);
  }

}
