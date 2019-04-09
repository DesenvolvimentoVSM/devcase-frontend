import { Component, OnInit } from '@angular/core';
import { Cidade } from './shared/Cidade.model';
import { ToastyService } from 'ng2-toasty';
import { EstadoService } from 'src/app/pagina-estado/estado/shared/estado.service';
import { CidadeService } from './shared/cidade.service';
import { Estado } from 'src/app/pagina-estado/estado/shared/Estado.model';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  public cidade: Cidade = new Cidade();
  public cidadeAlterada: Cidade = new Cidade();
  public estadoSelecionado: Estado = new Estado();

  public cidades: Cidade[];
  public estados: Estado[];

  public idCidade: number;

  public dialogCidade: boolean;
  public dialogConfirmarExclusao: boolean;
  public dialogAlterarCidade: boolean;

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.listarCidades();
    this.listarEstados();
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

  public cadastrarCidade() {
    this.cidadeService.cadastrar(this.cidade)
    .subscribe(response => {
      this.toasty.clearAll();
      this.toasty.success('Cidade salva com sucesso!');
      this.closeDialogCidade();
    },
    error => {
      this.errorHandler.handle(JSON.parse(error.error));
    });
  }

  public excluirCidade() {
    this.cidadeService.excluir(this.idCidade)
      .subscribe(() => {
        this.toasty.clearAll();
        this.toasty.success('Cidade excluída com sucesso!');
        this.listarCidades();
        this.dialogConfirmarExclusao = false;
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao excluir cidade!');
      });
  }

  public atualizarCidade(id: number, cidade: Cidade) {
    this.cidadeService.atualizar(id, cidade)
      .subscribe(response => {
        this.toasty.clearAll();
        this.toasty.success('Cidade atualizada com sucesso!');
        this.cidade = new Cidade();
        this.dialogAlterarCidade = false;
        this.listarCidades();
      },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro ao atualizar cidade!');
      });
  }

  public confirmarExclusao(id: number) {
    this.idCidade = id;
    this.dialogConfirmarExclusao = true;
  }

  public showDialogCidade() {
    this.dialogCidade = true;
  }
  public closeDialogCidade() {
    this.dialogCidade = false;
    this.cidade = new Cidade();
    this.listarCidades();
  }

  public dialogAtualizarCidade(cidade: Cidade) {
    this.cidadeAlterada = cidade;
    this.dialogAlterarCidade = true;
  }
  public closeDialogAlterar() {
    this.dialogAlterarCidade = false;
    this.cidadeAlterada = new Cidade();
    this.listarCidades();
  }


}
