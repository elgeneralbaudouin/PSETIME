import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// insertion des differents utilisateurs
  users: User[] = [ {"username": "elodie", "password": "1234", "roles":['admin',], "imageprofil":"img"},
                    {"username": "njoya", "password": "1234", "roles":['employe'], "imageprofil":"img2"},
                    {"username": "boss", "password": "1234", "roles":['superadmin','admin'], "imageprofil":"img3"} ];
  // loggerUser c'est pour recuperer les informations de connexion de l'utilisateurs
  // isLoggedIn c'est pour savoir si un utilisateur est connectee ou pas
  // roles c'est pour savoir quel roles a un utilisateur
  public loggedUser:string;
  public isloggedIn: boolean = false;
  public roles:string[];


  // methode permettant la connexion 
  SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if(user.username === curUser.username && user.password == curUser.password ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  // ce service permet de donner l'acces au element en fonction des utilisateurs
  isAdmin():Boolean{
    if(!this.roles)
    return false;
    return (this.roles.indexOf('admin') >-1);
  }
  isEmploye():Boolean{
    if(!this.roles)
    return false;
    return (this.roles.indexOf('employe') >-1);
  }
  isSuperadmin():Boolean{
    if(!this.roles)
    return false;
    return (this.roles.indexOf('superadmin') >-1);
  }
 
  constructor() { }
}
