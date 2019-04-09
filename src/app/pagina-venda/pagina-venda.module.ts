import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaComponent } from './venda/venda.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { VendaService } from './venda/shared/venda.service';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [VendaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
    TableModule,
    DialogModule,
    CurrencyMaskModule,
    DropdownModule,
    RadioButtonModule,
    InputMaskModule,
    CalendarModule
  ],
  exports: [VendaComponent],
  providers: [VendaService]
})
export class PaginaVendaModule { }
