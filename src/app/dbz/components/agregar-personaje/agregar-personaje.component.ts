import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
    selector: 'dbz-agregar-personaje',
    templateUrl: './agregar-personaje.component.html',
    styleUrl: './agregar-personaje.component.html'
})

export class AgregarPersonajeComponent {

    @Output()
    onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

    personaje: Personaje = {
        name : '',
        power: 0
    }

    emitirPersonaje(): void{
        if(this.personaje.name.length === 0) return;
        this.onNuevoPersonaje.emit(this.personaje);
        this.personaje = { name:'', power:0 }
    }
}