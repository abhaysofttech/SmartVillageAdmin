import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-config',
  templateUrl: './project-config.component.html',
  styleUrls: ['./project-config.component.css']
})
export class ProjectConfigComponent implements OnInit {
  public actionsArr: any;
  constructor() { }

  ngOnInit() {
  this.actionsArr = 'Behavioral';

  }
  showRecommendedActions(i: any) {
  this.actionsArr = i;
  }
  allConfig=true;
  newConfig=false;
  copyConfig=false;
  editConfig=false;
  resetDesc(){
    debugger;
    this.allConfig=true;
    this.newConfig=false;
    this.copyConfig=false;
    this.editConfig=false;
  }
  openDesc(value:string){
    debugger;
    this.allConfig = false;
    if (value == 'newConfig') { 
      return this.newConfig = true; 
    }
    if (value == 'copyConfig') { 
      return this.copyConfig = true; 
    }
    if (value == 'editConfig') { 
      return this.editConfig = true; 
    }
  }

}
