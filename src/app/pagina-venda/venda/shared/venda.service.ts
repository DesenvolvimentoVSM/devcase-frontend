import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServidorService } from 'src/app/shared/service/servidor.service';
import { Venda } from './Venda.model';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private vendaUrl = this.servidorService.getServidor() + '/vendas';

  constructor(
    private http: HttpClient,
    private servidorService: ServidorService
  ) { }

  public cadastrar(venda: Venda) {
    return this.http.post(
      `${this.vendaUrl}`,
      venda,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  public listar(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.vendaUrl);
  }

  public listarPorData(dataDe: string, dataAte: string): Observable<Venda[]> {
    let Params = new HttpParams();
    Params = Params.append('dataDe', dataDe);
    Params = Params.append('dataAte', dataAte);

    return this.http.get<Venda[]>(`${this.vendaUrl}`, {params: Params});
  }

  public listarPorDataESexo(dataDe: string, dataAte: string, sexo: string): Observable<Venda[]> {
    let Params = new HttpParams();
    Params = Params.append('dataDe', dataDe);
    Params = Params.append('dataAte', dataAte);
    Params = Params.append('sexo', sexo);

    return this.http.get<Venda[]>(`${this.vendaUrl}`, {params: Params});
  }

  public excluir(id: number) {
    return this.http.delete<Venda>(`${this.vendaUrl}/${id}`);
  }

  public atualizarPontosDoCliente(venda: Venda) {
    return this.http.put(
      `${this.vendaUrl}`,
      venda,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
