import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-Conges',
  templateUrl: './Conges.component.html',
  styleUrls: ['./Conges.component.css']
})
export class CongesComponent implements OnInit {
 
  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

  public congesEmploye: any[] = [
    {
      nom: "Nkodo Gaetan",
      type: "Maladie",
      datedep: "1 janvier 2020",
      datefin: " 3 janvier 2020",
      nombre: "05",
      raison: "maladie",
      statut: "En cour",
      action: ""
    },
    {
      nom: "Leonel Kotieu",
      type: "Vacance",
      datedep: "09 Mars 2021",
      datefin: "15 mars 2021",
      nombre: "06",
      raison: "",
      statut: "Consommer",
      action: ""
    },
    {
      nom: "Dogmo Baudouin",
      type: "Mission",
      datedep: "03 juin 2021",
      datefin: "06 juin 2021",
      nombre: "03",
      raison: "",
      statut: "Consommer",
      action: ""
    },
    {
      nom: "Yvan Etoua",
      type: "Mission",
      datedep: "11 juin 2021",
      datefin: "15 juin 2021",
      nombre: "04",
      raison: "",
      statut: "Consommer",
      action: ""
    }
  ];

  }



