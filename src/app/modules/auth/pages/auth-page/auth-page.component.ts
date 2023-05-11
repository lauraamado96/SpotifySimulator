import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({})
  errorSession: boolean = false

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      .subscribe(
        {
          next: responseOk => { // 200 < 400 --> Credentials OK
            console.log('Session started OK', responseOk);
            const { tokenSession, data } = responseOk
            this.cookie.set('token', tokenSession, 4, '/')
            this.router.navigate(['/', 'tracks'])
          },
          error: err => {  // error 400>= --> Credentials NOT OK
            this.errorSession = true
            console.log('⚠⚠⚠⚠ Error occurred with email or password');
          }
        }
      );
  }

}
