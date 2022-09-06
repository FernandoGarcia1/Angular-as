import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DBZService } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    DBZService
  ]
})
export class DbzModule { }
