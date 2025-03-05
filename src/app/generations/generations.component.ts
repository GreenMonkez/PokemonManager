import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  public titre: string = 'LES DIFFÉRENTES GÉNÉRATIONS :';

  public generations: string[] = [
    'Génération I',
    'Génération II',
    'Génération III',
    'Génération IV',
    'Génération V',
    'Génération VI',
    'Génération VII'
  ];

}