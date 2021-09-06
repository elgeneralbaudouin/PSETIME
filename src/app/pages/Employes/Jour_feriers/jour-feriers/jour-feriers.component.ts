import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  symbole: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', symbole: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', symbole: 'H'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', symbole: 'H'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', symbole: 'H'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', symbole: 'H'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', symbole: 'H'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', symbole: 'H'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', symbole: 'H'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', symbole: 'H'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', symbole: 'H'},
];

@Component({
  selector: 'app-jour-feriers',
  templateUrl: './jour-feriers.component.html',
  styleUrls: ['./jour-feriers.component.css']
})
export class JourFeriersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbole'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
