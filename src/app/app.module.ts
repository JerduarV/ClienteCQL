import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { TabComponent } from './tab/tab.component';
import { EditorAvanzadoComponent } from './editor-avanzado/editor-avanzado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CodeEditorComponent,
    TabComponent,
    EditorAvanzadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
