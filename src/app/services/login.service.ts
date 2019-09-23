import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Auxiliares/User';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private readonly URL_API: string = 'http://localhost:57174/api';

  constructor(private http: HttpClient, private userService: UserServiceService) { }

  login(username: string, pwd: string): any{
    var arreglo = {
      mensaje : this.ArmarLoginPack(username, pwd)
    };
    
    return this.http.post(this.URL_API + '/LUP', arreglo);
  }

  logout(): any{
    var arreglo = {
      mensaje : this.ArmarLogoutPack()
    };

    return this.http.post(this.URL_API + '/LUP', arreglo);
  }

  private ArmarLoginPack(user: string, pwd: string):string{
    return '[+LOGIN][+USER]' + user + '[-USER][+PASS]' + pwd + '[-PASS][-LOGIN]';
  }

  private ArmarLogoutPack():string{

    let u: User = this.userService.getUserLogeado();
    return '[+LOGOUT][+USER]' + u.username + '[-USER][-LOGOUT]';
  }
}
