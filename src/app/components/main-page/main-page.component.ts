import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditorAvanzadoComponent } from '../editor-avanzado/editor-avanzado.component';
import { LoginService } from '../../services/login.service';
import { Consola } from 'src/app/Auxiliares/Consola';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

declare var parsear: any;
declare var InterpretarLup: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild(EditorAvanzadoComponent) private editor_avanzado: EditorAvanzadoComponent;


  private readonly URL_API: string = 'http://localhost:57174/api';
  private consola: Consola = new Consola();

  constructor(private http: HttpClient, private loginService: LoginService, private userService: UserServiceService,
    private router: Router) { }

  ngOnInit() {
    
  }

  /**
   * Método por el que se envía el paquete Query para ser
   * ejecutado del lado del servidor
   */
  public Ejecutar(): void{
    this.LimpiarConsola();
    if(this.editor_avanzado){
      var arreglo = {
        mensaje : this.ArmarQueryPack(this.editor_avanzado.getTexto())
      };
      
      let c: Consola = this.consola;
      let a;

      this.http.post(this.URL_API + '/LUP', arreglo).subscribe(
        res => {
          console.log(res);
          (function ($) {
            a = $(res);
          })(parsear);
          //console.log(res);

          (function ($) {
            $(a, c)
          })(InterpretarLup);
        }
      );
    }

  }

  private ArmarQueryPack(msj: string):string{
    return '[+QUERY][+USER]admin[-USER][+DATA]' + msj + '[-DATA][-QUERY]'
  }

  /**
   * Método para cerrar la sesión
   */
  private Logout(){
    this.loginService.logout().subscribe(
      res =>{
        let a;
        (function ($) {
          a = $(res);
        })(parsear);
        console.log(a);

        (function ($) {
          a = $(a, null)
        })(InterpretarLup);

        if(a){
          this.userService.Desloguear();
          this.router.navigateByUrl('/login');
        }
      }
    )
  }

  /**
   * Limpia la consola de salida
   */
  private LimpiarConsola():void{
    this.consola.salida = "";
  }

}
