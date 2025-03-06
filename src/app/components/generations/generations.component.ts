import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-generations',
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {

  public generations: string[] = [];

  constructor(private apiSvc: ApiService) {
    this.apiSvc.getGenerations().subscribe({
      next: (value: any) => {
        for (let index = 0; index < value.count; index++) {
          this.generations.push(value.results[index].name.charAt(0).toUpperCase() + value.results[index].name.slice(1),);
        }
      }, error: (err) => {
        console.error('Erreur', err);
      }
    });
  };
}