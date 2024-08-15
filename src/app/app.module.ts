import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/components/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// configuracion local de la app
import localeEsMX from '@angular/common/locales/es-MX'
import localeFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsMX)
registerLocaleData(localeFrCA)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX' // para cambiar el idioma por defecto
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
