import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuhtService } from 'src/app/auth/services/auht.service';
import { TokenService } from 'src/app/auth/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    private authService: AuhtService,
    private tokenService: TokenService,
    private router: Router
  ) {
  }


  logout(): void {
    this.authService.logout().subscribe(
      response => this.handleResponse(response),
      errors => this.handleErrors(errors)
    )
  }


  private handleResponse(response: any): void {
    console.log(response.message);
    this.tokenService.revokeToken();
    this.router.navigateByUrl('/admin/layout/login')
  }


  private handleErrors(errors: any) {
    console.log(errors.error);

  }
  isEmployeeMenuOpen: boolean = false;

  toggleEmployeeMenu(): void {
    this.isEmployeeMenuOpen = !this.isEmployeeMenuOpen;
  }
}
