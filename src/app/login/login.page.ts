import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpRequestService} from 'src/app/service/http-request.service';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { LoginService } from "src/app/service/login.service";

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
  constructor(
    private router: Router, 
    private httpReq: HttpRequestService,
    private loginService:LoginService
    // private notification: LocalNotifications
    ) {

   }

  ngOnInit() {
  //   this.notification.schedule({
  //     text: 'Delayed ILocalNotification',
  //     trigger: {at: new Date(new Date().getTime() + 60)},
  //     led: 'FF0000',
  //     sound: null
  //  });
  }

  login() {

    this.loginService.SignIn(this.loginForm.email,this.loginForm.password);
    let user=this.loginService.getUser();
    console.log(user);
    
    // this.httpReq.post('auth/login', this.loginForm )
    // .subscribe((result: any) => {
    //   console.log(result.access_token);
    //   //
    //   localStorage.setItem('meftah', result.access_token);
    //   this.router.navigateByUrl('dashboard');
    //   // console.log(result);
    // });
  }
}
