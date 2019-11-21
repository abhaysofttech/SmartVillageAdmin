import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './pages/users/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { TwentyFiveWindowRatingWithWeightageComponent } from './shared/components/twenty-five-window-rating-with-weightage/twenty-five-window-rating-with-weightage.component';
import { SharedModule } from './shared/shared.module';
import { HTTP } from '@ionic-native/http/ngx';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { LockService } from './services/lock.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    //  HeaderComponent,
    LoginComponent,
    AuthComponent,
  //  LoadingSpinnerComponent,

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    FingerprintAIO,
    LockService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
