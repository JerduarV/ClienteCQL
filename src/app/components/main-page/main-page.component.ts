import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { Consola } from 'src/app/Auxiliares/Consola';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { VentanaErroresComponent } from '../ventana-errores/ventana-errores.component';

declare var parsear: any;
declare var InterpretarLup: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild('editor') private editor_avanzado: any;


  private readonly URL_API: string = 'http://localhost:57174/api';
  private consola: Consola = new Consola();
  private nivel: string;
  private sub: any;


  constructor(private http: HttpClient, private loginService: LoginService, private userService: UserServiceService,
    private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.nivel = params['nivel']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });
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
            //if(res == '')return;
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
    this.consola.lista_select = [];
    this.consola.lista_errores = [];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VentanaErroresComponent,{
      width: '750px',
      data: {lista: this.consola.lista_errores, nombre: "jerson"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


