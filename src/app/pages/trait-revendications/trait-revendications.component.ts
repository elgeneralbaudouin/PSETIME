import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trait-revendications',
  templateUrl: './trait-revendications.component.html',
  styleUrls: ['./trait-revendications.component.css']
})
export class TraitRevendicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public trairev: any[] = [
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End",
      Id: 1,
      date: "02/09/2021",
      textobjet: "Demande d'annulation des absences du 12 Fevier 2021",
      justtexte1: "Ce jour nous eions en mission a Douala car nous travallions sur le projet du PAD",
      justetexte2: "",
    }
  ];
}
