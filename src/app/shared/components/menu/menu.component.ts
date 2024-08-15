import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  private router = inject(Router)

  ngOnInit() {
      this.items = [
          {
            label:'Pipes de Angular',
            icon: ' pi pi-desktop',
            items:[
              {
                label:'Textos y fehcas',
                icon: 'pi pi-align-left',
                // command:()=>{this.router.navigateByUrl('/')}
                routerLink:'/ '
              },
              {
                label:'Numeros',
                icon: 'pi pi-dollar',
                // command:()=>{this.router.navigateByUrl('/numbers')}
                routerLink:'numbers'
              },
              {
                label: 'No comunes',
                icon: ' pi pi-globe',
                // command:()=>{this.router.navigateByUrl('/uncommon')}
                routerLink:'uncommon'
              }
            ]
          },
          {
            label:'Pipes personalizados',
            icon:'pi pi-cog',
            items:[
              {
                label:'Otro elemento',
                icon:'pi pi-cog',
                routerLink:'custom'
              }
            ]
          }
      ];
  }
}
