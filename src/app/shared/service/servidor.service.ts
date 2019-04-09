import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private servidor = /*'http://192.168.0.0/algumServidor'*/ 'http://localhost:8080';

  constructor() { }

  /**
   * @description
   * Retorna a url do servidor backend atual. É importante concatenar a
   * resposta deste método com o path do serviço que deseja consumir, exemplo:
   * private servidor = this.servidorService.getServidor() + '/servico-a-ser-consumido';
   */
  public getServidor(): string {
    return this.servidor;
  }

}
