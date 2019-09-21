import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  private login(user: string, pwd: string, event: Event){
    event.preventDefault();

    this.loginService.login(user, pwd).subscribe(
      res =>{
        console.log(res);
      }
    );
  }

}
