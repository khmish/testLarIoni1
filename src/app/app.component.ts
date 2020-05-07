import {
  Component
} from '@angular/core';

import {
  Platform
} from '@ionic/angular';
import {
  SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
  StatusBar
} from '@ionic-native/status-bar/ngx';
import {
  FCM
} from '@ionic-native/fcm/ngx';
// import { FirebaseServiceService } from './service/firebase-service.service';
import { FirebaseUserService , User } from "src/app/service/firebase-user.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
     private userService:FirebaseUserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.fcm.subscribeToTopic('marketing');

      // this.fcm.getToken().then(token => {
      //   console.log('token');
      //   let userModel:User={
      //     email:'hk0021@gmail.com',
      //     token:''
      //   };
      //   this.userService.addUser(userModel);
      // });

      // this.fcm.onNotification().subscribe(data => {
      //   if (data.wasTapped) {
      //     console.log("Received in background");
      //   } else {
      //     console.log("Received in foreground");
      //   };
      // });

      // this.fcm.onTokenRefresh().subscribe(token => {
      //   console.log(token);
        
      //   // backend.registerToken(token);
      // });

      // this.fcm.unsubscribeFromTopic('marketing');
    });




  }
}