import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServidorService } from 'src/app/shared/service/servidor.service';
import { Observable } from 'rxjs';
import { Pontuacao } from './Pontuacao.model';

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  private pontosUrl = this.servidorService.getServidor() + '/pontos';

  constructor(
    private http: HttpClient,
    private servidorService: ServidorService
    ) { }

  public cadastrar(pontos: Pontuacao) {
    return this.http.post(
      `${this.pontosUrl}`,
      pontos,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  public listar(): Observable<Pontuacao[]> {
    return this.http.get<Pontuacao[]>(this.pontosUrl);
  }

  public excluir(id: number) {
    return this.http.delete<Pontuacao>(`${this.pontosUrl}/${id}`);
  }

  public atualizar(id: number, pontos: Pontuacao) {
    return this.http.put(
      `${this.pontosUrl}/${id}`,
      pontos,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
