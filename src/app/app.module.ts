import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing/app-routing.module";


import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { TabComponent } from './components/tab/tab.component';
import { EditorAvanzadoComponent } from './components/editor-avanzado/editor-avanzado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AceEditorModule } from 'ng2-ace-editor';

import { MatTabsModule, MatButtonModule, MatIconModule } from '@angular/material';
import { Editor2Component } from './components/editor2/editor2.component';
import { Editor3Component } from './components/editor3/editor3.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

const monacoConfig:  NgxMonacoEditorConfig = {

  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => {
    
    monaco.editor.defineTheme('CAAS', {
      base: 'vs', // can also be vs-dark or hc-black
      inherit: true, // can also be false to completely replace the builtin rules
      rules: [
        {token : 'string', foreground : '#f48f42'},
        {token : 'comment', foreground : '#818791'},
        {token : 'number.float', foreground : '#bf59ff'},
        {token : 'number', foreground : '#bf59ff'}
      ],
      colors: {
        
      }
    });

  }
};

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CodeEditorComponent,
    TabComponent,
    EditorAvanzadoComponent,
    Editor2Component,
    Editor3Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    AceEditorModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
