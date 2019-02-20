import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { PaginaEstadoModule } from './pagina-estado/pagina-estado.module';
import { PaginaCidadesModule } from './pagina-cidades/pagina-cidades.module';
import { PaginaTipoPagamentoModule } from './pagina-tipo-pagamento/pagina-tipo-pagamento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastyModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

    PaginaInicialModule,
    PaginaEstadoModule,
    PaginaCidadesModule,
    PaginaTipoPagamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
