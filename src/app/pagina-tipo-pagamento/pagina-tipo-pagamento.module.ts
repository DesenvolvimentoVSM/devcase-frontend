import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoPagComponent } from './tipo-pag/tipo-pag.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TipoPagService } from './tipo-pag/shared/tipo-pag.service';

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
  exports: [TipoPagComponent],
  providers: [TipoPagService]
})
export class PaginaTipoPagamentoModule { }
