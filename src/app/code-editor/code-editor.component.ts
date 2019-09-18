import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

const INIT_CONTENT = '';
const THEME = 'ace/theme/monokai';
//const LANG = 'ace/mode/javascript';


@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

  private codeEditor: ace.Ace.Editor;
  private editorBeautify;
  @ViewChild('codeEditor') private codeEditorElmRef: ElementRef;
  @Input() content : string;

  constructor() { }

  ngOnInit() {
    ace.require('ace/ext/lenguage_tools');
    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions = this.getEditorOptions();
    this.codeEditor = this.createCodeEditor(element, editorOptions);
    this.setCodigo(this.content || INIT_CONTENT);
    //HOLD REFERENCE TO BEAUTIFY EXTENSION
    this.editorBeautify = ace.require('ace/ext/beautify');
  }

  private getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion? : boolean;}{
    const basicEditorOptions : Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine : true,
      minLines : 25,
      maxLines : 25
    };
    const extreEditorOptions = {enableBasicAutocompletion : true};
    return Object.assign(basicEditorOptions, extreEditorOptions);
  }

  private createCodeEditor(element: Element, options: any): ace.Ace.Editor{
    const editor = ace.edit(element, options);
    editor.scrollToLine(25, true, true, function () {});
    editor.setTheme(THEME);
    //editor.getSession().setMode(LANG);
    editor.setShowFoldWidgets(true);
    return editor;
  }

  /**
   * Método que retorna el código contenido en el editor
   */
  public getCodigo(){
    if(this.codeEditor){
      const code = this.codeEditor.getValue();
      return code;
    }
  }

  /**
   * Método para setear el contenido del editor
   * @param content Contendo nuevo a setear
   */
  public setCodigo(content: string): void{
    if(this.content){
      this.codeEditor.setValue(content);
      console.log(content);
    }
  }

  public beautifyContent(){
    if(this.codeEditor && this.editorBeautify){
      const session = this.codeEditor.getSession();
      this.editorBeautify.beautify(session);
    }
  }



}
