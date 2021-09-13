import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// ajout de l'attribut User
  user = new User();
  erreur = 0;

  constructor(private authService : AuthService,
    private router: Router) { }
  // private router:Router
  ngOnInit(){
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  // creation de la methode onloggedin permettant d'afficher les utilisateurs 
  onLoggedin()
  {
    console.log(this.user);

    let isValidUser: Boolean = this.authService.SignIn(this.user);
    // let is permissionadmin: string = this.authService.roles;
    if(isValidUser)
    this.router.navigate(['/Administrateur']);
    else
    // alert('les donnees remplies ne sont pas corrects');
    this.erreur = 1;
  }


}
