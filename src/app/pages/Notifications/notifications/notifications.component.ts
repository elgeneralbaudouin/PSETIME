import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  personne: string;
  texte: string;
  action: string;
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    personne: 'assets/img/OIP.jpg',
    texte: 'Nous avons une reunion lundi',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table. ydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table. `
  },{
    personne: "assets/img/OIP.jpg",
    texte: 'votre demande de permission a ete rejeter',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    personne: 'assets/img/OIP.jpg',
    texte: 'vous avez un nouveau projet sur le quel vous devez travailler',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },{
    personne: 'assets/img/OIP.jpg',
    texte: '',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    personne: 'assets/img/OIP.jpg',
    texte: '',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    personne: 'assets/img/OIP.jpg',
    texte: '',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    personne: 'assets/img/OIP.jpg',
    texte: '',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    personne: 'assets/img/OIP.jpg',
    texte: '',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },{
    personne: 'assets/img/OIP.jpg',
    texte: '',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    personne: 'assets/img/OIP.jpg',
    texte: '',
    action: '',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
];

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NotificationsComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['personne', 'texte', 'action'];
  expandedElement : PeriodicElement | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
