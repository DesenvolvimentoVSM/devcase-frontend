import { Component, OnInit } from '@angular/core';
import { Estado } from './shared/Estado.model';
import { EstadoService } from './shared/estado.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  public estado: Estado = new Estado();
  public estadoAlterado: Estado = new Estado();
  public estados: Estado[];
  public idEstado: number;

  public dialogEstado: boolean;
  public dialogConfirmarExclusao: boolean;
  public dialogAlterarEstado: boolean;

  constructor(
    private estadoService: EstadoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.listarEstados();
  }

  public listarEstados() {
    this.estadoService.listarEstados()
      .subscribe(response => {
        this.estados = response;
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao carregar estados!');
      });
  }

  public cadastrarEstado() {
    this.estadoService.cadastrar(this.estado)
    .subscribe(response => {
      this.toasty.clearAll();
      this.toasty.success('Estado salvo com sucesso!');
      this.closeDialogEstado();
    },
    error => {
      this.errorHandler.handle(JSON.parse(error.error));
    });
  }

  public excluirEstado() {
    this.estadoService.excluir(this.idEstado)
      .subscribe(() => {
        this.toasty.clearAll();
        this.toasty.success('Estado excluído com sucesso!');
        this.listarEstados();
        this.dialogConfirmarExclusao = false;
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao excluir estado!');
      });
  }

  public atualizarEstado(id: number, estado: Estado) {
    this.estadoService.atualizar(id, estado)
      .subscribe(response => {
        this.toasty.clearAll();
        this.toasty.success('Estado atualizado com sucesso!');
        this.estado = new Estado();
        this.dialogAlterarEstado = false;
        this.listarEstados();
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao atualizar estado!');
      });
  }

  public confirmarExclusao(id: number) {
    this.idEstado = id;
    this.dialogConfirmarExclusao = true;
  }

  public showDialogEstado() {
    this.dialogEstado = true;
  }
  public closeDialogEstado() {
    this.dialogEstado = false;
    this.estado = new Estado();
    this.listarEstados();
  }

  public dialogAtualizarEstado(estado: Estado) {
    this.estadoAlterado = estado;
    this.dialogAlterarEstado = true;
  }
  public closeDialogAlterar() {
    this.dialogAlterarEstado = false;
    this.estadoAlterado = new Estado();
    this.listarEstados();
  }

}
