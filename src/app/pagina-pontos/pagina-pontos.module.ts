import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PontosComponent } from './pontos/pontos.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PontosService } from './pontos/shared/pontos.service';

@NgModule({
  declarations: [PontosComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
    TableModule,
    DialogModule,
    CurrencyMaskModule
  ],
  providers: [PontosService]
})
export class PaginaPontosModule { }
