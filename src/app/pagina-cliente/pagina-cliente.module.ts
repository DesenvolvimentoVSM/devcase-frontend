import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputMaskModule} from 'primeng/inputmask';

import { ClienteService } from './cliente/shared/cliente.service';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
    TableModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputMaskModule
  ],
  exports: [ClienteComponent],
  providers: [ClienteService]
})
export class PaginaClienteModule { }
