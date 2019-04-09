import { Component, OnInit } from '@angular/core';
import { TipoPagamento } from './shared/TipoPagamento.model';
import { TipoPagService } from './shared/tipo-pag.service';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-tipo-pag',
  templateUrl: './tipo-pag.component.html',
  styleUrls: ['./tipo-pag.component.css']
})
export class TipoPagComponent implements OnInit {

  public tipoPag: TipoPagamento = new TipoPagamento();
  public tipoAlterado: TipoPagamento = new TipoPagamento();
  public tipos: TipoPagamento[];

  public idTipo: number;

  public dialogTipoPag: boolean;
  public dialogConfirmarExclusao: boolean;
  public dialogAlterarTipoPag: boolean;

  constructor(
    private tipoPagService: TipoPagService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.listarTipos();
  }

  public listarTipos() {
    this.tipoPagService.listar()
      .subscribe(response => {
        this.tipos = response;
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao carregar tipos!');
      });
  }

  public cadastrarTipo() {
    this.tipoPagService.cadastrar(this.tipoPag)
    .subscribe(response => {
      this.toasty.clearAll();
      this.toasty.success('Tipo Pagamento salvo com sucesso!');
      this.closeDialogTipoPag();
    },
    error => {
      this.errorHandler.handle(JSON.parse(error.error));
    });
  }

  public excluirTipo() {
    this.tipoPagService.excluir(this.idTipo)
      .subscribe(() => {
        this.toasty.clearAll();
        this.toasty.success('Tipo excluído com sucesso!');
        this.listarTipos();
        this.dialogConfirmarExclusao = false;
      },
      error => {
        this.toasty.error('Erro ao excluir tipo!');
      });
  }

  public atualizarTipo(id: number, tipoPag: TipoPagamento) {
    this.tipoPagService.atualizar(id, tipoPag)
      .subscribe(response => {
        this.toasty.clearAll();
        this.toasty.success('Tipo pagamento atualizado com sucesso!');
        this.tipoPag = new TipoPagamento();
        this.dialogAlterarTipoPag = false;
        this.listarTipos();
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao atualizar tipo!');
      });
  }

  public confirmarExclusao(id: number) {
    this.idTipo = id;
    this.dialogConfirmarExclusao = true;
  }

  public showDialogTipoPag() {
    this.dialogTipoPag = true;
  }
  public closeDialogTipoPag() {
    this.dialogTipoPag = false;
    this.tipoPag = new TipoPagamento();
    this.listarTipos();
  }

  public dialogAtualizarTipoPag(tipoPag: TipoPagamento) {
    this.tipoAlterado = tipoPag;
    this.dialogAlterarTipoPag = true;
  }
  public closeDialogAlterar() {
    this.dialogAlterarTipoPag = false;
    this.tipoAlterado = new TipoPagamento();
    this.listarTipos();
  }

}
