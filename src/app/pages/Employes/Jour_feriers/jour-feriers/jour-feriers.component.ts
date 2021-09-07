import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  titre: string;
  id: number;
  date: string;
  jour: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, titre: 'Nouvel An', date: '1 janvier 2020', jour: 'Mercredi', action: ''},
  {id: 2, titre: 'Noël', date: '25 decembre 2020', jour: 'Mardi', action: ''},
  {id: 3, titre: 'Fete de la Tabaski', date: '19 mars 2020', jour: 'Vendredi', action: ''},
  {id: 4, titre: 'Fete du Ramadan', date: '02 juin 2020', jour: 'Mardi', action: ''},
  {id: 5, titre: 'Fete de l\'Unité Nationale', date: '20 mai 2020', jour: 'Jeudi', action: ''},
];

@Component({
  selector: 'app-jour-feriers',
  templateUrl: './jour-feriers.component.html',
  styleUrls: ['./jour-feriers.component.css']
})
export class JourFeriersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titre', 'date', 'jour', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
