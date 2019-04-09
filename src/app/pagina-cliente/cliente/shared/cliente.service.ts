import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServidorService } from 'src/app/shared/service/servidor.service';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteUrl = this.servidorService.getServidor() + '/clientes';

  constructor(
    private http: HttpClient,
    private servidorService: ServidorService
    ) { }

  public cadastrar(cliente: Cliente) {
    return this.http.post(
      `${this.clienteUrl}`,
      cliente,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  public listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clienteUrl);
  }

  public excluir(id: number) {
    return this.http.delete<Cliente>(`${this.clienteUrl}/${id}`);
  }

  public atualizar(id: number, cliente: Cliente) {
    return this.http.put(
      `${this.clienteUrl}/${id}`,
      cliente,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
