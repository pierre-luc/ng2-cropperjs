import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Ng2CropperjsModule} from "./ng2-cropperjs/ng2-cropperjs.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2CropperjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
