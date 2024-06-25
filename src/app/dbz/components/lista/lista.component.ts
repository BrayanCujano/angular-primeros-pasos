import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent { 
  @Input()
  public listaPersonaje: Personaje[] = [{
    name: 'Brayan',
    power: 10
  }];
  @Output()
  onBorrarId : EventEmitter<string> = new EventEmitter();

  onBorrarPersonaje(id?: string): void{
    if(!id) return;
    this.onBorrarId.emit(id);
  }
}
