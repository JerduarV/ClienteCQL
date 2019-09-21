import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditorAvanzadoComponent } from '../editor-avanzado/editor-avanzado.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild(EditorAvanzadoComponent) private editor_avanzado: EditorAvanzadoComponent;
  
  private readonly URL_API: string = 'http://localhost:57174/api';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  ngOnInit() {
  }

  /**
   * Método por el que se envía el paquete Query para ser
   * ejecutado del lado del servidor
   */
  public Ejecutar(): void{
    if(this.editor_avanzado){
      var arreglo = {
        mensaje : this.ArmarQueryPack(this.editor_avanzado.getTexto())
      };
      
      this.http.post(this.URL_API + '/LUP', arreglo).subscribe(
        res => {
          console.log(res);
        }
      )
    }
  }

  private ArmarQueryPack(msj: string):string{
    return '[+QUERY][+USER]admin[-USER][+DATA]' + msj + '[-DATA][-QUERY]'
  }

  /**
   * Método para cerrar la sesión iniciada
   */
  public logout() {
    
  }

}
