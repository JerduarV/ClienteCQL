import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { MatTabChangeEvent } from '@angular/material';
import { Editor2Component } from '../editor2/editor2.component';
import { Editor3Component } from '../editor3/editor3.component';

@Component({
  selector: 'app-editor-avanzado',
  templateUrl: './editor-avanzado.component.html',
  styleUrls: ['./editor-avanzado.component.css']
})
export class EditorAvanzadoComponent implements OnInit {

  @ViewChildren("editor") editor: any;

  private ArregloTabs : Editor3Component[];
  private selectedTab : Editor3Component = null;
  private indexSelectedTab: number;

  constructor() { 
    this.ArregloTabs = [];
  }

  private addTab():void{
    let tab: Editor3Component = new Editor3Component();
    tab.setNombre('Nuevo.cql');
    tab.setCod('//TODO CODE HERE');
    this.ArregloTabs.push(tab);
  }

  importFile(event) {

    if (event.target.files.length == 0) {
       console.log("No file selected!");
       return
    }
      let file: File = event.target.files[0];

      // after here 'file' can be accessed and used for further process
      let fileReader : FileReader = new FileReader();
      fileReader.onload = (e) => {
        this.AddTab(file.name, fileReader.result as string);
        //console.log(fileReader.result as string);
      }
      fileReader.readAsText(file);
    }

  ngOnInit() {
  }

  public AddTab(nombreTab: string, contenido: string) : Editor3Component{
    let tab : Editor3Component = new Editor3Component();
    this.ArregloTabs.push(tab);
    tab.setNombre(nombreTab);
    tab.setCod(contenido);
    return tab;
  }

  public RemoveTab():void{
    if(this.indexSelectedTab){
      this.ArregloTabs.splice(this.indexSelectedTab);
    }
  }

  public getTab():void{
    if(this.selectedTab){
      console.log(this.selectedTab.getCod() + ' ' + this.selectedTab.getNombre());
    }
  }

  public onInitEditor($event: any) {
    // See the editor component
     console.log($event);
  }

  /**
   * Retorna la tab seleccionada actualmente
   * @param tabChagedEvent 
   */
  private tabChanged(tabChagedEvent: MatTabChangeEvent):void{
    this.selectedTab = this.ArregloTabs[tabChagedEvent.index];
    this.indexSelectedTab = tabChagedEvent.index;
  }

  public getSelectedText():string{
    console.log(this.selectedTab.getSelectedText());
    return '';
  }

  public getTexto():string{
    if(this.selectedTab != null){
      return this.selectedTab.getCod();
    }else{
      return '//NO HABÍA CODIGO';
    }
  }

}
