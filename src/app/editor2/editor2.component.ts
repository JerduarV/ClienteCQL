import { Component, OnInit, Directive } from '@angular/core';
import { AceEditorDirective } from 'ng2-ace-editor';

@Component({
  selector: 'app-editor2',
  templateUrl: './editor2.component.html',
  styleUrls: ['./editor2.component.css'],
  template:`
  <div ace-editor
       [(text)]="text" 
       [mode]="'sql'" 
       [theme]="'eclipse'"
       [options]="options"
       [readOnly]="false"
       [autoUpdateContent]="false" 
       [durationBeforeCallback]="1000"
       (textChanged)="onChange($event)"
       style="min-height: 200px; width:100%; overflow: auto;"></div>
  `
})
export class Editor2Component {

  text: string = '//TODO CODE HERE';
  options: any = {maxLines: 35, printMargin: false};
  private nombre: string = '';

  constructor() { }

  public getCodigo(): string{
    return this.text;
  }

  public setCodigo(n: string):void{
    console.log(n);
    this.text = n;
  }

  onChange(code) {
    this.text = code;
  }

  public setNombre(n: string):void{
    this.nombre = n;
  }

  public getNombre():string{
    return this.nombre;
  }

}
