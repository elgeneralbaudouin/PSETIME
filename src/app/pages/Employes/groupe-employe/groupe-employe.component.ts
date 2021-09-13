import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-groupe-employe',
  templateUrl: './groupe-employe.component.html',
  styleUrls: ['./groupe-employe.component.css']
})
export class GroupeEmployeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  public groupem: any[] = [
    {
      hArr: "09 h 00",
      hDep: "18 h 00",
      tEff: "09 h",
      deCon: "mar. 10 Août 2021",
      finCon: "Ven. 13 Août 2021",
      conAnn: "Congé annuel"
    }
  ]

}
