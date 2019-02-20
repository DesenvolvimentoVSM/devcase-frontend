import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoPagComponent } from './tipo-pag/tipo-pag.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [TipoPagComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
    TableModule,
    DialogModule,
  ],
  exports: [TipoPagComponent]
})
export class PaginaTipoPagamentoModule { }
