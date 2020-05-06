import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpRequestService} from 'src/app/service/http-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private httpReq: HttpRequestService) {

   }

  ngOnInit() {
  }

  login() {

    this.httpReq.post('auth/login', this.loginForm )
    .subscribe((result: any) => {
      console.log(result.access_token);
      //
      localStorage.setItem('meftah', result.access_token);
      this.router.navigateByUrl('dashboard');
      // console.log(result);
    });
  }
}
