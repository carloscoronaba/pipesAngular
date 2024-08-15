import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: String = 'Jose'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() {
    this.name = 'Ale'
    this.gender = 'female'
  }

  // i18nPlural
  public clients: string[] = ['Jose', 'Carlos', 'Ale', 'Fer', 'Nancy', 'Arnulfo', 'Max']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift()
  }

  // keyValue pipe
  public person = {
    name: 'John',
    age: 30,
    address: 'New York'
  }

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('tenemos data en la promesa')
      this.person.name = 'otro nombre'
    }, 3500);
  })

}
