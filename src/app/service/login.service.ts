import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any;
  constructor(
    private authFire:AngularFireAuth,
    
    ) { 

    this.authFire.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });


  }


   // Login in with email/password
   SignIn(email, password) {
    return this.authFire.auth.signInWithEmailAndPassword(email, password)
    // return this.authFire.signInWithCredential()

  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.authFire.auth.createUserWithEmailAndPassword(email, password)
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // Sign-out 
  SignOut() {
    return this.authFire.auth.signOut().then(() => {
      localStorage.removeItem('user');
      // this.router.navigate(['login']);
    })
  }

  getUser()
  {
    return this.userData;
  }
}
