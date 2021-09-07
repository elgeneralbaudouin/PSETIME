import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilemploye',
  templateUrl: './profilemploye.component.html',
  styleUrls: ['./profilemploye.component.css']
})
export class ProfilemployeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public profilemploye: any[] = [
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End",
      Id: 1,
      date: "02/09/2021",
      telephone: 652887295,
      email: "nkodonkodogaetan@gmail.com",
      datenais: "12 mars 1990",
      nationalite: "Camerounais",
      religion: "Chretien",
      situation: "Marié",
      Adresse: "Nkomkana",
      enfants: 3,
      genre: "Masculin",
      nationaliteper: "Camerounais",
      relper: "Musulman",
      mariage: "Celibataire",
      adreper: "Nkolanga",
      nompersonneurge: "Baudouin",
      genreper: "Masculin"
    }
  ];

}
