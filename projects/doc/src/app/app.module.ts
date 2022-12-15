import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArcoThemeModule } from 'arco-design-angular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArcoThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
