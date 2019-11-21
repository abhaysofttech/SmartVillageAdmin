import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { ApiendpointService } from 'src/app/services/apiendpoint.service';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "encryptedToken": "test"
    })
};

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: any[] = [];
    apiURL: any;
    currentURL: any;
    constructor(private http: HttpClient, private nativeHttp: HTTP, private platform: Platform, private apiendpoint: ApiendpointService, ) {
        this.apiURL = this.apiendpoint.API;
        if (this.platform.is('cordova')) {
            this.currentURL = this.apiURL.gamifyurl;

        }
        else {
            this.currentURL = this.apiURL.gamifyurl;

        }
    }
    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    };
    getArea(): Promise<any> {
        return new Promise((resolve, reject) => {
            debugger
            this.http.get(this.currentURL + 'initiatives', httpOptions)
                .toPromise()
                .then((success) => { resolve(success) })
                .catch((error) => { reject(error) })
        })
    }

}