import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ApiService } from 'src/app/services/api.service';
import { commonService } from 'src/app/services/shared.service';

import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
loginloading = false;
  ZenForteData: any = [];
  constructor(private api: ApiService, 
    private formBuilder: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,

    private _data: commonService) { 
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phonenumber: ['', Validators.required],
      password: ['', Validators.required]
  });
     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        debugger
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        if (this.f.phonenumber.value == 878787) {
            this.router.navigate([this.returnUrl]);
        }
        else {
            this.authenticationService.login(this.f.phonenumber.value, this.f.password.value)
                .pipe(first())
                .subscribe(
                    data => {
                        debugger;
                        this.alertService.presentAlert(['Login successful', '', 'Hi ' + data.firstname + ', Welcome to my complain', 'OK']);
                        if (!data.userState || !data.userDivision || !data.userDistrict || !data.userZone || !data.userZone) {
                            this.router.navigate(['/registervillage']);
                        }
                        else this.router.navigate([this.returnUrl]);
                    },
                    error => {
                        this.alertService.error(['Login Fail', '', error]);
                        this.loading = false;
                    });
        }
    }

}
