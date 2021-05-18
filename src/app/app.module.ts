import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PandasComponent } from './pandas/pandas.component';
import { PandaComponent } from './panda/panda.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { AddPandaButtonComponent } from './add-panda-button/add-panda-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PandasComponent,
    PandaComponent,
    AComponent,
    BComponent,
    AddPandaButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
