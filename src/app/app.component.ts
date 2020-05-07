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
import { FirebaseServiceService } from './service/firebase-service.service';

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
    private fire:FirebaseServiceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.fcm.subscribeToTopic('marketing');

      this.fcm.getToken().then(token => {
        console.log('token');
        
        this.fire.updateTodo({createdAt:new Date().getTime(),priority:2,token:token,task:""},'0v6MHj6dwzf2pqTkfOMP')
      });

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