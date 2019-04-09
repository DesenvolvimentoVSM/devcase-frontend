import { Injectable } from '@angular/core';
import { ServidorService } from 'src/app/shared/service/servidor.service';
import { Observable } from 'rxjs';
import { TipoPagamento } from './TipoPagamento.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoPagService {

  private tipoPagUrl = this.servidorService.getServidor() + '/tipo-pagamento';

  constructor(
    private http: HttpClient,
    private servidorService: ServidorService
    ) { }

  public cadastrar(tipo: TipoPagamento) {
    return this.http.post(
      `${this.tipoPagUrl}`,
      tipo,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  public listar(): Observable<TipoPagamento[]> {
    return this.http.get<TipoPagamento[]>(this.tipoPagUrl);
  }

  public excluir(id: number) {
    return this.http.delete<TipoPagamento>(`${this.tipoPagUrl}/${id}`);
  }

  public atualizar(id: number, tipo: TipoPagamento) {
    return this.http.put(
      `${this.tipoPagUrl}/${id}`,
      tipo,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
