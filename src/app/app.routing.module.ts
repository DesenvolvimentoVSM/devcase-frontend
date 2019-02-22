import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { TelaInicialComponent } from './pagina-inicial/tela-inicial/tela-inicial.component';
import { MenuComponent } from './pagina-inicial/menu/menu.component';
import { EstadoComponent } from './pagina-estado/estado/estado.component';
import { CidadeComponent } from './pagina-cidades/cidade/cidade.component';
import { TipoPagComponent } from './pagina-tipo-pagamento/tipo-pag/tipo-pag.component';
import { PontosComponent } from './pagina-pontos/pontos/pontos.component';
import { ClienteComponent } from './pagina-cliente/cliente/cliente.component';
import { VendaComponent } from './pagina-venda/venda/venda.component';
import { LoginComponent } from './seguranca/login/login.component';

/*
 *  @description
 * Modulo de rotas da aplicação, utilizado para gerenciar todas as rotas de toda a aplicação.
 */
const appRoutes: Routes = [
    {path: 'inicio', component: TelaInicialComponent},
    {path: 'login', component: LoginComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'estados', component: EstadoComponent},
    {path: 'cidades', component: CidadeComponent},
    {path: 'tipo-pagamento', component: TipoPagComponent},
    {path: 'pontos', component: PontosComponent},
    {path: 'clientes', component: ClienteComponent},
    {path: 'vendas', component: VendaComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
