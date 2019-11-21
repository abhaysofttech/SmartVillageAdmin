import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, forkJoin } from 'rxjs';
import { ApiendpointService } from './apiendpoint.service';
import { commonService } from './shared.service';
import { isNullOrUndefined } from 'util';
import { Platform } from '@ionic/angular';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "encryptedToken":"test"
  })
};

const headers = new HttpHeaders().set("Content-Type", "application/json");
let appheaders: {
  "Content-Type": "application/json"
}
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL: any;
  currentURL: any;
  //dataList = './assets/list.json';
  userData = {
    username: '',
    role: '',
    staffNo: '',
    roles: []
  }
  // Set limit for API call
  apiRequestTimeOut: number = 300;
  constructor(private http: HttpClient, private nativeHttp: HTTP, private platform: Platform, private apiendpoint: ApiendpointService, private _data: commonService) {

    this._data.currentData.subscribe(
      currentData => {
        if (currentData == '') {
          let tempdata = [];
          isNullOrUndefined(localStorage.getItem("ZenForteData")) ? tempdata = [] : tempdata = JSON.parse(localStorage.getItem("ZenForteData"));
          //  localStorage.setItem("ZenForteData", JSON.stringify(this.loginData));

          if (tempdata.length > 0) {
            console.log(tempdata);

            this.userData.username = tempdata[0].sessionBean.authenticationVO.staffName;
            this.userData.role = tempdata[0].sessionBean.authenticationVO.role;
            this.userData.staffNo = tempdata[0].sessionBean.authenticationVO.staffNo;
            this.userData.roles = tempdata[0].roles;
            this._data.updateMessage(this.userData); // Shared Data in shared service

            // this.ZenForteData = (tempdata).concat(this.loginData);
            // localStorage.setItem("ZenForteData", JSON.stringify(this.loginData));
          }
          else {
            console.log('array size exceeded...');
          }
        }

      }
    )
    this.apiURL = this.apiendpoint.API;
    if (this.platform.is('cordova')) {
      this.currentURL = this.apiURL.preRelease;

    }
    else {
      this.currentURL = this.apiURL.baseURL;

    }
    //  this.currentURL = this.apiURL.localURL
  }

  // getDashboardDataForPGM(data){
  //    return this._http.get(this.dataList).toPromise();
  // }

  // getDashboardDataForPGM2(data): Observable<any> {
  //   let dataState = this.httpPlugin.get(this.dataList, {});
  //   return forkJoin(dataState);
  // }
  // getDashboardDataForPGM1(data) {
  //   let dataState = this.httpPlugin.get(this.dataList).toPromise();
  //   return dataState;
  // }

  /**
     * Below method is used to get Dashboard data for PGM
     */
  getDashboardDataForPGM(authToken: string, empRole: string, empNumber: string, requestCall: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // Set request time
      this.nativeHttp.setRequestTimeout(this.apiRequestTimeOut);
      this.nativeHttp.setDataSerializer('json');

    
      let headers = {
        "Content-Type": "application/json",
        "encryptedToken":"test"
      }

      if (this.platform.is('cordova')) {
        if (requestCall == "genderChartResponse") {
          this.nativeHttp.get(this.currentURL + this.apiURL.getGenderChartForPGM + empNumber +
            "/" + empRole, {}, headers)
            .then((success) => { resolve(JSON.parse(success.data)) })
            .catch((error) => { reject(error) })
        };
        if (requestCall == "twentyFiveWindowResponse") {
          this.nativeHttp.post(this.currentURL + this.apiURL.twentyFiveWindowService +
            empNumber + "&role=" + empRole, {}, headers)
            .then((success) => { resolve(JSON.parse(success.data)) })
            .catch((error) => { reject(error) })
        };
        if (requestCall == "leadWiseResponse") {
          this.nativeHttp.get(this.currentURL + this.apiURL.pgmDistributionService + empNumber +
            "/" + empRole, {}, headers)
            .then((success) => { resolve(JSON.parse(success.data)) })
            .catch((error) => { reject(error) })
        };
        if (requestCall == "overAllAssociatesChartResponse") {
          this.nativeHttp.get(this.currentURL + this.apiURL.overallAssociatesService +
            empNumber + "/" + empRole, {}, headers)
            .then((success) => { resolve(JSON.parse(success.data)) })
            .catch((error) => { reject(error) })
        }
      } else {
        if (requestCall == "genderChartResponse") {
          this.http.get(this.currentURL + this.apiURL.getGenderChartForPGM + empNumber +
            "/" + empRole, httpOptions)
            .toPromise()
            .then((success) => { resolve(success) })
            .catch((error) => { reject(error) })

        };
        if (requestCall == "twentyFiveWindowResponse") {
          this.http.post(this.currentURL + this.apiURL.twentyFiveWindowService +
            empNumber + "&role=" + empRole,{}, httpOptions)
            .toPromise()
            .then((success) => { resolve(success) })
            .catch((error) => { reject(error) })
        };
        if (requestCall == "leadWiseResponse") {
          this.http.get(this.currentURL + this.apiURL.pgmDistributionService + empNumber +
            "/" + empRole, httpOptions)
            .toPromise()
            .then((success) => { resolve(success) })
            .catch((error) => { reject(error) })
        };
        if (requestCall == "overAllAssociatesChartResponse") {
          this.http.get(this.currentURL + this.apiURL.overallAssociatesService +
            empNumber + "/" + empRole, httpOptions)
            .toPromise()
            .then((success) => { resolve(success) })
            .catch((error) => { reject(error) })
        }
      }


    })
  }

  /**
   * Below method is used to get dashboard data for CEO, SRMGMT & BU 
   */
  getDashboardDataForCeoSrmgmtBu(authToken: string): Observable<any> {
    // Http get method for Graph
    let graphResponse = this.nativeHttp.get(this.currentURL + this.apiURL.dashboardGraphForCeoSrmgmtBuService, {}, {});

    // Http get method for Account list
    let accountList = this.nativeHttp.get(this.currentURL + this.apiURL.getAccountList, {}, {});

    // Http get method for Total Associates count
    let totalAssociatesCount = this.nativeHttp.get(this.currentURL + this.apiURL.getTotalAssociatesCount, {}, {});

    // Http get method for Total Billable count
    let totalBillableAssociatesCount = this.nativeHttp.get(this.currentURL + this.apiURL.getBillableAssociatesCount, {}, {});

    // Http get method for Non Billable count
    let totalNonBillableAssociatesCount = this.nativeHttp.get(this.currentURL + this.apiURL.getNonBillableAssociatesCount, {}, {});

    // Http get method for InTransit count
    let totalInTransitCount = this.nativeHttp.get(this.currentURL + this.apiURL.getInTransitCount, {}, {});

    // Http get method for Pool count
    let totalPoolCount = this.nativeHttp.get(this.currentURL + this.apiURL.getPoolCount, {}, {});

    // Http get method for EBR count
    let totalEbrCount = this.nativeHttp.get(this.currentURL + this.apiURL.getEbrCount, {}, {});

    // Http get method for OnShore location wise count
    let totalOnShoreLocationWiseCount = this.nativeHttp.get(this.currentURL + this.apiURL.getOnShoreLocationWiseCount, {}, {});

    // Http get method for OffShore location wise count
    let totalOffShoreLocationWiseCount = this.nativeHttp.get(this.currentURL + this.apiURL.getOffShoreLocationWiserCount, {}, {});

    // Http get method for Visa count
    let totalVisaCount = this.nativeHttp.get(this.currentURL + this.apiURL.getVisaCount, {}, {});

    return forkJoin([graphResponse, accountList, totalAssociatesCount, totalBillableAssociatesCount,
      totalNonBillableAssociatesCount, totalInTransitCount, totalEbrCount, totalPoolCount, totalOnShoreLocationWiseCount,
      totalOffShoreLocationWiseCount, totalVisaCount])
  }

  /**
    * Below Post method used to get Demand List data
    */
  /**
 * Below Post method used to get Demand List data
 */
  demandList(authToken: string, empNumber: string, empRole: string): Promise<any> {
    return new Promise((resolve, reject) => {

      // Set request time
      //  this.nativeHttp.setRequestTimeout(this.apiRequestTimeOut);
      //  this.httpPlugin.setDataSerializer('json');

      // Prepare body
      let body = {

      };

      // Prepare headers
      this.nativeHttp.setHeader('*', 'encryptedToken', "" + authToken);
      this.nativeHttp.setHeader('*', 'Content-Type', "application/json");

      // Http post method
      this.nativeHttp.post(this.currentURL + this.apiURL.demandListService + empNumber + "&role=" + empRole, body, {})
        .then((success) => {
          resolve(success)
        })
        .catch((error) => {
          reject(error)
        })
    });
  }

  login(userName: string, password: string): Promise<any> {

    return new Promise((resolve, reject) => {

      // Set request time
      this.nativeHttp.setRequestTimeout(this.apiRequestTimeOut);
      this.nativeHttp.setDataSerializer('json');
      // Prepare body
      let body = {
        "strUsername": userName,
        "strPassword": password
      }
      let headers = {
        "Content-Type": "application/json"
      }
      // Http post method 
      if (this.platform.is('cordova')) {
        this.nativeHttp.post(this.currentURL + this.apiURL.loginSerivce, body, headers)
          .then((success) => {
            console.log(success)
            resolve(JSON.parse(success.data))
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      }
      else {
        this.http.post(this.currentURL + this.apiURL.loginSerivce, body,)
       // this.http.post(this.apiURL.baseURL, body)
          .toPromise()
          .then((success) => { 
            resolve(success) })
          .catch((error) => {
            reject(error)
          })

      }

    });
  }



}
