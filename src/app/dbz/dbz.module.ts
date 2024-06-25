import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from './components/lista/lista.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';

@NgModule({
  declarations: [ 
    MainPageComponent, 
    ListaComponent,
    AgregarPersonajeComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ 
    MainPageComponent
  ]
})
export class DbzModule { }
