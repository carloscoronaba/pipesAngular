import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuComponent } from '../shared/components/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset'
import {PanelModule} from 'primeng/panel';


@NgModule({
  exports: [
    MenubarModule,
    // MenuModule
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
