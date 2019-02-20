import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TelaInicialComponent, MenuComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TelaInicialComponent, MenuComponent, NavbarComponent]
})
export class PaginaInicialModule { }
