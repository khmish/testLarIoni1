import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  isLoggedIn = true;
  constructor(private router: Router, private httpRequest: HttpRequestService) {
    const key = localStorage.getItem('meftah');
    // console.log(key)
    if ( key.length > 0) {
      this.httpRequest.post('auth/me', { 'token': key}).subscribe( (result: any) => {
        console.log(result);
        this.isLoggedIn = true;
      });
    } else {
      this.isLoggedIn = false;

    }
   }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any   {

    if( this.isLoggedIn === true)
    {
      return true;
    } else {

      return false;
    }
    

  }

}
