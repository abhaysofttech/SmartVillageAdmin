import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { commonService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData : any
  constructor(private _data: commonService) { }

  ngOnInit() {
    this._data.currentData.subscribe(
      currentData => this.userData = currentData
    )
  }
  collapse(){
    if($('body').hasClass('sidebar-mini')){
      $('body').removeClass('sidebar-mini')
   }else{
      $('body').addClass('sidebar-mini')
   }
  }
  openMobileSideMenu(){
    debugger
    $('.sidebar').css({"width":"100%"});
  }
}
