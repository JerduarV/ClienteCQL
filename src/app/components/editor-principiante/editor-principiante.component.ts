import { Component, OnInit } from '@angular/core';

declare var Blockly: any;

@Component({
  selector: 'app-editor-principiante',
  templateUrl: './editor-principiante.component.html',
  styleUrls: ['./editor-principiante.component.css']
})
export class EditorPrincipianteComponent implements OnInit {

  constructor() { }

  workspace: any;


  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      scrollbars: true
    });
    console.log(this.workspace);
  }

  getCodigo(): void {
    console.log(this.workspace);
    var code = Blockly.JavaScript.workspaceToCode(this.workspace);
    console.log(code);
    //console.log('saving the program - ', JSON.stringify(cod));
  }

}
