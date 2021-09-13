import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-presence-employe',
  templateUrl: './presence-employe.component.html',
  styleUrls: ['./presence-employe.component.css']
})
export class PresenceEmployeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  public presencconfig: any[] = [{
    heurearrconfig: "09 h 00",
    heuredepconfig: "18 h 00",
    temaeffe: "09h"
  }];

  public presenceEmploye: any[] = [
    {
      date: "Jeu. 5 Août 2021",
      statut: "Present",
      heurearrive: "09 h 40",
      heuredep: "20 h 00",
      tempseffectue: "10 h 20",
      heuresup: "02 h",
      retard: "40 min"
    },
    {
      date: "Mer. 4 Août 2021",
      statut: "Present",
      heurearrive: "09 h 00",
      heuredep: "19 h 00",
      tempseffectue: "10 h 00",
      heuresup: "01 h",
      retard: "0"
    },
    {
      date: "Mar. 3 Août 2021",
      statut: "Absent",
      heurearrive: "",
      heuredep: "",
      tempseffectue: "00",
      heuresup: "",
      retard: ""
    }
  ];

}
