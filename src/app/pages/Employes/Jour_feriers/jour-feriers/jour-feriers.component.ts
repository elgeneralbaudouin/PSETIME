import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';



// export interface PeriodicElement {
//   titre: string;
//   id: number;
//   date: string;
//   jour: string;
//   action: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, titre: 'Nouvel An', date: '1 janvier 2020', jour: 'Mercredi', action: ''},
//   {id: 2, titre: 'Noël', date: '25 decembre 2020', jour: 'Mardi', action: ''},
//   {id: 3, titre: 'Fete de la Tabaski', date: '19 mars 2020', jour: 'Vendredi', action: ''},
//   {id: 4, titre: 'Fete du Ramadan', date: '02 juin 2020', jour: 'Mardi', action: ''},
//   {id: 5, titre: 'Fete de l\'Unité Nationale', date: '20 mai 2020', jour: 'Jeudi', action: ''},
// ];

@Component({
  selector: 'app-jour-feriers',
  templateUrl: './jour-feriers.component.html',
  styleUrls: ['./jour-feriers.component.css']
})
export class JourFeriersComponent implements OnInit {
  // displayedColumns: string[] = ['id', 'titre', 'date', 'jour', 'action'];
  // dataSource = ELEMENT_DATA;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  public ferierEmploye: any[] = [
    {
      id: "1",
      titre: "Nouvel An",
      datedep: "1 janvier 2020",
      jour: "Mercredi",
      action: ""
    },
    {
      id: "2",
      titre: "Noël",
      datedep: "25 decembre 2020",
      jour: "Mardi",
      action: ""
    },
    {
      id: "3",
      titre: "Fete de la Tabaski",
      datedep: "19 mars 2020",
      jour: "Vendredi",
      action: ""
    },
    {
      id: "4",
      titre: "Fete du Ramadan",
      datedep: "02 juin 2020",
      jour: "Mardi",
      action: ""
    },
    {
      id: "5",
      titre: "Fete de l'Unité Nationale",
      datedep: "20 mai 2020",
      jour: "Jeudi",
      action: ""
    }
  ];

}
