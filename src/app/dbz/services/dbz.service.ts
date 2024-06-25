import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public personajes: Personaje[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    }, {
        id: uuid(),
        name: 'Goku',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];

    onNuevoPersonaje(personaje: Personaje): void{
        const nuevoPersonaje: Personaje = {id:uuid(), ...personaje};
        this.personajes.push(nuevoPersonaje);
        console.log(this.personajes);
    }

    onBorrarPersonajeByID(id: string): void{
        this.personajes = this.personajes.filter( personaje => personaje.id !== id);
    }
    
}