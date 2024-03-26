import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuhtService } from '../../services/auht.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errors: any;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(
      private authService: AuhtService,
      private tokenService: TokenService,
      private router: Router,
      private fb: FormBuilder
  ) {

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit():void{
    this.cleanErrors();
    this.authService.login(this.loginForm.value).subscribe(
      response => this.handleResponse(response),
      errors => this.handleErrors(errors),

      )
  }


  private handleResponse(response: any):void {
    console.log(response.message);
    this.tokenService.handleToken(response.token);

     // TODO: redict to dashboard
     this.router.navigateByUrl('/admin/layout')
  }


  private handleErrors(errors: any){
    this.errors = errors.error.errors;
    console.log(this.errors);

  }


  private cleanErrors():void {
    this.errors = null;
  }
}
