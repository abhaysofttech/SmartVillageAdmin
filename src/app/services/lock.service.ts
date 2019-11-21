import { Subscription } from 'rxjs';
import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { LockScreenComponent } from '../pages/users/lock-screen/lock-screen';
import { ComponentProps, ModalOptions } from '@ionic/core';
export class LockService {

    private onPauseSubscription: Subscription;
    private onResumeSubscription: Subscription;
    private lockScreen: any;
    private initialized: boolean = false;
    private isLocked: boolean = false;
    constructor(public platform: Platform,
        public splashScreen: SplashScreen,
        public modalCtrl: ModalController,
        public faio: FingerprintAIO) { }

     init() {
        if (this.initialized) {
            return
        }
        this.lockScreen = this.modalCtrl.create({
            component: LockScreenComponent,
            componentProps: { value: 123 }
        });
     
        this.platform.ready().then(() =>{
            this.onPauseSubscription = this.platform.pause.subscribe(() =>{
                this.splashScreen.show();
            });

            this.onResumeSubscription = this.platform.resume.subscribe(() =>{
                if(!this.isLocked){
                    this.isLocked = true;
                this.lockScreen.present();         
                this.showFingerPrint();      
             }
             this.splashScreen.hide();
            });
        });
    }
    
    showFingerPrint(){
        this.faio.show({
             clientId: 'Fingerprint-Demo', //Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
             clientSecret: 'o7aoOMYUbyxaD23oFAnJ', //Necessary for Android encrpytion of keys. Use random secret key.
             disableBackup:true,  //Only for Android(optional)
             localizedFallbackTitle: 'Use Pin', //Only for iOS
             localizedReason: 'Please authenticate' //Only for iOS
         })
         .then((result: any) => {
             console.log(result);
             this.lockScreen.dismiss();
             this.isLocked = false;
            })
         .catch((error: any) => console.log(error));
    }
}