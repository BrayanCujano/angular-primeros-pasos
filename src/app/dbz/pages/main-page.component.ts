import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor( private dbzService: DbzService ){}

    get personaje(): Personaje[]{
        return [...this.dbzService.personajes];
    }

    borrarPersonaje(id: string): void{
        this.dbzService.onBorrarPersonajeByID(id);
    }

    agregarPersonaje(personaje: Personaje): void{
        this.dbzService.onNuevoPersonaje(personaje);
    }
}