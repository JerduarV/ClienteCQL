import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Auxiliares/User';
import { UserServiceService } from 'src/app/services/user-service.service';

declare var InterpretarLup: any;
declare var parsear: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router,
    private userService: UserServiceService) { }

  ngOnInit() {
  }

  private login(user: string, pwd: string, nivel: string,  event: Event){
    
    event.preventDefault();

    let a;

    this.loginService.login(user, pwd).subscribe(
      res =>{
        console.log(res);
        (function ($) {
          a = $(res);
        })(parsear);
        console.log(a);

        (function ($) {
          a = $(a, null)
        })(InterpretarLup);
        if(!a){
          alert('USUARIO O CONTRAEÑA INCORRECTA');
        }else{
          let u: User = new User(user);
          this.userService.setUsuarioLogeado(u);
          
          if(nivel == 'Avanzado' || nivel == 'Principiante' || nivel == 'Intermedio'){
            this.router.navigate(['/main', nivel]);
          }else{
            alert('SELECCIONE UN NIVEL');
          }
        }
      }
    );
  }

}
