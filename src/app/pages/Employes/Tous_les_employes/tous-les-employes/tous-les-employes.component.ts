import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-tous-les-employes',
  templateUrl: './tous-les-employes.component.html',
  styleUrls: ['./tous-les-employes.component.css']
})
export class TousLesEmployesComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  //  cette fonction permet d'afficher la liste des employes
  public listeEmploye: any[] = [
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Njoya Moustapha",
      Fonction: "Stagiaire"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Leonel Kotieu",
      Fonction: "Stagiaire"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Dongmo Baudouin",
      Fonction: "Dev Back End"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End"
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
      Fonction: "Dev Front End"
    }
  ];
}
