import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { ServidorService } from '../shared/service/servidor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public oauthTokenUrl = this.servidorService.getServidor() + '/oauth/token';

  constructor(
    private http: HttpClient,
    private servidorService: ServidorService
  ) { }

  public login(usuario: string, senha: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, {headers});
  }

}
