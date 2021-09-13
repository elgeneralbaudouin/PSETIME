import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/Table';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-presences',
  templateUrl: './presences.component.html',
  styleUrls: ['./presences.component.css']
})
export class PresencesComponent implements OnInit {

  constructor(public authService: AuthService) { }
  ngOnInit(): void {
  }

  public presenceadmin: any[] = [
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Njoya Moustapha",
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Leonel Kotieu",
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Dongmo Baudouin",
    },
    {
      image3: "assets/img/OIP.jpg",
      Nom: "Nkodo Gaetan",
    }
  ];
}
