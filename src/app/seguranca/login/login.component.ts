import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: string;
  public senha: string;

  constructor(
    private authService: AuthService,
    private toasty: ToastyService
  ) { }

  public login() {
    this.authService.login(this.usuario, this.senha)
    .subscribe(response => {
      console.log(response);
    },
      error => {
        this.toasty.clearAll();
        this.toasty.error('Erro!');
      });
  }

}
