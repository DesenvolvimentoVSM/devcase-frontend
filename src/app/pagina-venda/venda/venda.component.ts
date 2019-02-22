import { Component, OnInit } from '@angular/core';
import { VendaService } from './shared/venda.service';
import { Venda } from './shared/Venda.model';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { Cliente } from 'src/app/pagina-cliente/cliente/shared/Cliente.model';
import { TipoPagamento } from 'src/app/pagina-tipo-pagamento/tipo-pag/shared/TipoPagamento.model';
import { ClienteService } from 'src/app/pagina-cliente/cliente/shared/cliente.service';
import { TipoPagService } from 'src/app/pagina-tipo-pagamento/tipo-pag/shared/tipo-pag.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  // public vendaAlterada: Pontuacao = new Pontuacao();
  public venda: Venda = new Venda();
  public vendas: Venda[];
  public vendasPorData: Venda[];
  public clientes: Cliente[];
  public tiposPag: TipoPagamento[];

  public clienteSelecionado: Cliente = new Cliente();
  public tipoPagSelecionado: TipoPagamento = new TipoPagamento();
  public idVenda: number;

  public dialogVenda: boolean;
  public dialogConfirmarExclusao: boolean;

  public dataDe: string;
  public dataAte: string;
  public sexo: string;

  constructor(
    private vendaService: VendaService,
    private clienteService: ClienteService,
    private tipoPagService: TipoPagService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.listarVendas();
    this.listarClientes();
    this.listarTipos();
  }

  public listarVendas() {
    this.vendaService.listar()
      .subscribe(response => {
        this.vendas = response;
      },
        error => {
          this.toasty.clearAll();
          this.toasty.error('Erro ao carregar vendas!');
        });
  }

  public listarVendasPorDataOuSexo() {

    if (this.dataDe && this.dataAte) {

      if (this.sexo) {
        this.vendaService.listarPorDataESexo(this.dataDe, this.dataAte, this.sexo)
        .subscribe(response => {
          this.vendas = response;
        },
          error => {
            this.toasty.clearAll();
            this.toasty.error('Erro ao carregar vendas!');
          });
      } else {
        this.vendaService.listarPorData(this.dataDe, this.dataAte)
          .subscribe(response => {
            this.vendas = response;
          },
            error => {
              this.toasty.clearAll();
              this.toasty.error('Erro ao carregar vendas!');
            });
      }

    } else {
      this.listarVendas();
    }

  }

  public limparCamposPesquisa() {
    this.dataDe = null;
    this.dataAte = null;
    this.sexo = null;
  }

  public listarClientes() {
    this.clienteService.listar()
      .subscribe(response => {
        this.clientes = response;
      },
        error => {
          this.toasty.clearAll();
          this.toasty.error('Erro ao carregar clientes!');
        });
  }

  public listarTipos() {
    this.tipoPagService.listar()
      .subscribe(response => {
        this.tiposPag = response;
      },
        error => {
          this.toasty.clearAll();
          this.toasty.error('Erro ao carregar tipos!');
        });
  }

  public cadastrarVenda() {
    this.venda.cliente = this.clienteSelecionado;
    this.venda.tipoPag = this.tipoPagSelecionado;
    this.vendaService.cadastrar(this.venda)
      .subscribe(response => {
        this.toasty.clearAll();
        this.toasty.success('Venda salva com sucesso!');
        this.closeDialogVenda();
      },
        error => {
          this.errorHandler.handle(JSON.parse(error.error));
        });
  }

  public excluirVenda() {
    this.vendaService.excluir(this.idVenda)
      .subscribe(() => {
        this.toasty.clearAll();
        this.toasty.success('Venda excluída com sucesso!');
        this.listarVendas();
        this.dialogConfirmarExclusao = false;
      },
        error => {
          this.toasty.error('Erro ao excluir pontuação!');
        });
  }

  public atualizarPontosCliente(venda: Venda) {
    this.vendaService.atualizarPontosDoCliente(venda)
      .subscribe(response => {
        this.toasty.clearAll();
        this.toasty.success('Pontuação atualizada com sucesso!');
        this.venda = new Venda();
        // this.dialogAlterarPontuacao = false;
        this.listarVendas();
      },
        error => {
          this.toasty.clearAll();
          this.toasty.error('Erro ao atualizar pontuação!');
        });
  }

  public confirmarExclusao(id: number) {
    this.idVenda = id;
    this.dialogConfirmarExclusao = true;
  }

  public showDialogVenda() {
    this.dialogVenda = true;
  }
  public closeDialogVenda() {
    this.dialogVenda = false;
    this.venda = new Venda();
    this.listarVendas();
  }

  /*public dialogAtualizarPontuacao(pontos: Pontuacao) {
    this.pontuacaoAlterada = pontos;
    this.dialogAlterarPontuacao = true;
  }
  public closeDialogAlterar() {
    this.dialogAlterarPontuacao = false;
    this.pontuacaoAlterada = new Pontuacao();
    this.listarPontos();
  }*/

}
