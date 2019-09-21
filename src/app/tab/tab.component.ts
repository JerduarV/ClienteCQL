import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CodeEditorComponent } from '../code-editor/code-editor.component';
import { Archivo } from 'src/Clases Editor/Archivo';
import { Editor2Component } from '../editor2/editor2.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @ViewChild('editor') private editorRef: Editor2Component;
  private archivo: Archivo;

  constructor() { 
    this.archivo = new Archivo();
  }


  ngOnInit() {
  }

  /**
   * Retorna el nombre del archivo que contiene
   */
  public getNombreArchivo():string{
    return this.archivo.getNombre();
  }

  public setNombreArchivo(n: string):void{
    this.archivo.setNombre(n);
  }

  public setContenido(n: string):void{
    this.editorRef.setCodigo(n);
  }

  public getContenido(): string{
    return this.editorRef.getCodigo();
  }

}
