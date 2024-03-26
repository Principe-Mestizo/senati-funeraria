import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const isUserAuthenticatedGuard: CanActivateFn = (route, state) => {

  const isAuthenticated = inject(TokenService).isAuthenticated();
  if (isAuthenticated)
    return true;
  inject(Router).navigateByUrl('/admin/login')

  return false;
};


export const isGuestGuard: CanActivateFn = (route, state) => {

  const isAuthenticated = inject(TokenService).isAuthenticated();
  if (!isAuthenticated)
    return true;
  inject(Router).navigateByUrl('/admin/layout')

  return false;
};

