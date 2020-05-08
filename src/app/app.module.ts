import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { FirebaseServiceService } from "src/app/service/firebase-service.service";
import { FirebaseUserService } from "src/app/service/firebase-user.service";
import { LoginService } from "src/app/service/login.service";

import {SidemenuComponent} from 'src/app/sidemenu/sidemenu.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from '@ionic-native/fcm/ngx';


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    // LocalNotifications,
    LoginService,
    StatusBar,
    SplashScreen,
    AuthGuardService,
    FirebaseServiceService, 
    FirebaseUserService,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
