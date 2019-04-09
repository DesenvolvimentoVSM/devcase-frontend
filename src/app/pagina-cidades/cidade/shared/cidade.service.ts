import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServidorService } from 'src/app/shared/service/servidor.service';
import { Cidade } from './Cidade.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private cidadeUrl = this.servidorService.getServidor() + '/cidades';

  constructor(
    private http: HttpClient,
    private servidorService: ServidorService
    ) { }

  public cadastrar(cidade: Cidade) {
    return this.http.post(
      `${this.cidadeUrl}`,
      cidade,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  public listar(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.cidadeUrl);
  }

  public excluir(id: number) {
    return this.http.delete<Cidade>(`${this.cidadeUrl}/${id}`);
  }

  public atualizar(id: number, cidade: Cidade) {
    return this.http.put(
      `${this.cidadeUrl}/${id}`,
      cidade,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}
