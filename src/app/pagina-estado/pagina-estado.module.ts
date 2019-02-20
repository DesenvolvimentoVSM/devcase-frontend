import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoComponent } from './estado/estado.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EstadoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
    TableModule,
    DialogModule,
  ],
  exports: [EstadoComponent]
})
export class PaginaEstadoModule { }
