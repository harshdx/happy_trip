import { CanActivateFn } from '@angular/router';

export const adminauthGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('UserAuth') === 'Admin'){
    return true;
  }
  else
  {
    return false;

  }
};
