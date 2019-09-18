import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-editor-avanzado',
  templateUrl: './editor-avanzado.component.html',
  styleUrls: ['./editor-avanzado.component.css']
})
export class EditorAvanzadoComponent implements OnInit {

  private ArregloTabs : TabComponent[];

  constructor() { 
    this.ArregloTabs = [];
    this.AddTab('HOLA');
    this.AddTab('HOLA');
    this.AddTab('HOLA');
    this.AddTab('HOLA');
    this.AddTab('HOLA');
  }

  ngOnInit() {
  }

  public AddTab(nombreTab: string) : void{
    let tab : TabComponent = new TabComponent();
    this.ArregloTabs.push(tab);
    tab.setNombreArchivo(nombreTab);
  }

}
