import { Component, OnInit } from '@angular/core';
import { Cliente } from './shared/Cliente.model';
import { ClienteService } from './shared/cliente.service';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { Cidade } from 'src/app/pagina-cidades/cidade/shared/Cidade.model';
import { CidadeService } from 'src/app/pagina-cidades/cidade/shared/cidade.service';
import { EstadoService } from 'src/app/pagina-estado/estado/shared/estado.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public clienteAlterado: Cliente = new Cliente();
  public clienteSelecionado: Cliente = new Cliente();
  public cidadeSelecionada: Cidade = new Cidade();
  public clientes: Cliente[];
  public cidades: Cidade[];

  public idCliente: number;

  public dialogCliente: boolean;
  public dialogConfirmarExclusao: boolean;
  public dialogAlterarCliente: boolean;
  public dialogDetalhesCliente: boolean;

  constructor(
    private clienteService: ClienteService,
    private cidadeService: CidadeService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.listarClientes();
    this.listarCidades();
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

  public listarCidades() {
    this.cidadeService.listar()
      .subscribe(response => {
        this.cidades = response;
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao carregar cidades!');
      });
  }

  public cadastrarCliente() {
    this.cliente.cidade = this.cidadeSelecionada;
    this.cliente.totalPontos = 0;
    this.clienteService.cadastrar(this.cliente)
      .subscribe(response => {
        this.toasty.clearAll();
        this.toasty.success('Cliente salvo com sucesso!');
        this.closeDialogCliente();
      },
        error => {
          this.errorHandler.handle(JSON.parse(error.error));
        });
  }

  public excluirCliente() {
    this.clienteService.excluir(this.idCliente)
      .subscribe(() => {
        this.toasty.clearAll();
        this.toasty.success('Cliente excluído com sucesso!');
        this.listarClientes();
        this.dialogConfirmarExclusao = false;
      },
        error => {
          this.toasty.error('Erro ao excluir cliente!');
        });
  }

  public atualizarCliente(id: number, cliente: Cliente) {
    this.clienteService.atualizar(id, cliente)
      .subscribe(response => {
        this.toasty.clearAll();
        this.toasty.success('Cliente atualizado com sucesso!');
        this.cliente = new Cliente();
        this.dialogAlterarCliente = false;
        this.listarClientes();
      },
        error => {
          this.toasty.clearAll();
          this.toasty.error('Erro ao atualizar cliente!');
        });
  }

  public confirmarExclusao(id: number) {
    this.idCliente = id;
    this.dialogConfirmarExclusao = true;
  }

  public showDialogCliente() {
    this.dialogCliente = true;
  }
  public closeDialogCliente() {
    this.dialogCliente = false;
    this.cliente = new Cliente();
    this.cidadeSelecionada = null;
    this.listarClientes();
  }

  public dialogAtualizarCliente(cliente: Cliente) {
    this.clienteAlterado = cliente;
    this.cidadeSelecionada = cliente.cidade;
    this.dialogAlterarCliente = true;
  }
  public closeDialogAlterar() {
    this.dialogAlterarCliente = false;
    this.clienteAlterado = new Cliente();
    this.listarClientes();
  }

  public dialogDetalhes(cliente: Cliente) {
    this.clienteSelecionado = cliente;
    this.dialogDetalhesCliente = true;
  }
  public closeDialogDetalhes() {
    this.dialogDetalhesCliente = false;
    this.clienteSelecionado = new Cliente();
    this.cliente = new Cliente();
  }

}
