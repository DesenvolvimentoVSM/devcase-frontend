import { Component, OnInit } from '@angular/core';
import { Pontuacao } from './shared/Pontuacao.model';
import { PontosService } from './shared/pontos.service';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { TipoPagamento } from 'src/app/pagina-tipo-pagamento/tipo-pag/shared/TipoPagamento.model';

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.css']
})
export class PontosComponent implements OnInit {

  public pontos: Pontuacao = new Pontuacao();
  public pontuacaoAlterada: Pontuacao = new Pontuacao();
  public pontuacoes: Pontuacao[];

  public idPontuacao: number;

  public dialogPontos: boolean;
  public dialogConfirmarExclusao: boolean;
  public dialogAlterarPontuacao: boolean;

  constructor(
    private pontosService: PontosService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.listarPontos();
  }

  public listarPontos() {
    this.pontosService.listar()
      .subscribe(response => {
        this.pontuacoes = response;
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao carregar pontuações!');
      });
  }

  public cadastrarPontos() {
    this.pontosService.cadastrar(this.pontos)
    .subscribe(response => {
      this.toasty.clearAll();
      this.toasty.success('Pontuação salva com sucesso!');
      this.closeDialogPontos();
    },
    error => {
      this.errorHandler.handle(JSON.parse(error.error));
    });
  }

  public excluirPontuacao() {
    this.pontosService.excluir(this.idPontuacao)
      .subscribe(() => {
        this.toasty.clearAll();
        this.toasty.success('Pontuação excluída com sucesso!');
        this.listarPontos();
        this.dialogConfirmarExclusao = false;
      },
      error => {
        this.toasty.error('Erro ao excluir pontuação!');
      });
  }

  public atualizarPontuacao(id: number, pontos: Pontuacao) {
    this.pontosService.atualizar(id, pontos)
      .subscribe(response => {
        this.toasty.clearAll();
        this.toasty.success('Pontuação atualizada com sucesso!');
        this.pontos = new Pontuacao();
        this.dialogAlterarPontuacao = false;
        this.listarPontos();
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao atualizar pontuação!');
      });
  }

  public confirmarExclusao(id: number) {
    this.idPontuacao = id;
    this.dialogConfirmarExclusao = true;
  }

  public showDialogPontos() {
    this.dialogPontos = true;
  }
  public closeDialogPontos() {
    this.dialogPontos = false;
    this.pontos = new Pontuacao();
    this.listarPontos();
  }

  public dialogAtualizarPontuacao(pontos: Pontuacao) {
    this.pontuacaoAlterada = pontos;
    this.dialogAlterarPontuacao = true;
  }
  public closeDialogAlterar() {
    this.dialogAlterarPontuacao = false;
    this.pontuacaoAlterada = new Pontuacao();
    this.listarPontos();
  }

}
