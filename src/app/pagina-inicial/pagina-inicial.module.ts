import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [TelaInicialComponent, MenuComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
  ],
  exports: [TelaInicialComponent, MenuComponent, NavbarComponent]
})
export class PaginaInicialModule { }
