import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.css']
})
export class GroupesComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
}

public tableaugroupe: any[] = [
  {
    id: 1,
    name: 'Développement Front-End',
    action: ''
  },  
  {
    id: 2,
    name: 'Développement Back-End',
    action: ''
  },  
  {
    id: 3,
    name: 'Commercialisation',
    action: ''
  },
  {
    id: 4,
    name: 'Ressources Humaines',
    action: ''
  },
  {
    id: 5,
    name: 'Analystes',
    action: ''
  }, 
];


public tableau: any[] = [
  {
    arriv: '09 h 00',
    depart: '18 h 00',
    temps: '09 h',
    deconges: 'mar. 10 Août 2021',
    finconges: 'Ven. 13 Août 2021'
  },  
];
}
