import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estado } from './Estado.model';
import { ServidorService } from 'src/app/shared/service/servidor.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private estadoUrl = this.servidorService.getServidor() + '/estados';

  constructor(
    private http: HttpClient,
    private servidorService: ServidorService
    ) { }

  public cadastrar(estado: Estado) {
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');

    // return this.http.post<Estado>(this.estadoUrl, {headers});
    return this.http.post(
      `${this.estadoUrl}`,
      estado,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  public listarEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.estadoUrl);
  }

  public excluir(id: number) {
    return this.http.delete<Estado>(`${this.estadoUrl}/${id}`);
  }

  public atualizar(id: number, estado: Estado) {
    return this.http.put(
      `${this.estadoUrl}/${id}`,
      estado,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
