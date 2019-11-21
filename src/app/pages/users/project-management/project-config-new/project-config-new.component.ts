import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-config-new',
  templateUrl: './project-config-new.component.html',
  styleUrls: ['./project-config-new.component.scss']
})
export class ProjectConfigNewComponent implements OnInit {
  public actionsArr: any;
  constructor() { }

  ngOnInit() {
  this.actionsArr = 'Behavioral';

  }
  showRecommendedActions(i: any) {
  this.actionsArr = i;
  }


}
