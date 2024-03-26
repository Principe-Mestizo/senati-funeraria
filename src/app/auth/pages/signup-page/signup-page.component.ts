import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuhtService } from '../../services/auht.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  registerForm: FormGroup;
  errors: any;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(
    private authService: AuhtService,
    private router: Router,
    private fb: FormBuilder
  ){
    this.registerForm = this.fb.group({
      name: [''],
      email: [],
      password: [''],
      password_confirmation: ['']
    });
  }


  onSubmit():void {
    this.cleanErrors();
    this.authService.register( this. registerForm.value ).subscribe(
      response => this.handleResponse(response),
      errors => this.handleErrors(errors)
    )
  }


  private handleResponse(response: any):void {
    console.log(response.message);
    // TODO: redicto login
    // this.router.navigateByUrl('/login')
  }


  private handleErrors(errors: any){
    this.errors = errors.error.errors;
    console.log(this.errors);

  }

  private cleanErrors():void {
    this.errors = null;
  }

}
