import { NgModule } from '@angular/core';
import { ProjectManagementComponent } from './project-management.component';
import { ProjectManagementRoutingModule } from './project-management-routing.module';

import { CommonModule } from '@angular/common';
import { BaselineConfigComponent } from './baseline-config/baseline-config.component';
import { ProjectConfigComponent } from './project-config/project-config.component';
import { PendingApprovalsComponent } from './pending-approvals/pending-approvals.component';
import { NewTrackComponent } from './new-track/new-track.component';
import { ProjectConfigNewComponent } from './project-config-new/project-config-new.component';

@NgModule({
    declarations:[
        ProjectManagementComponent,

        BaselineConfigComponent,
        ProjectConfigComponent,
        PendingApprovalsComponent,
        NewTrackComponent,
        ProjectConfigNewComponent
    ],
    imports:[
        ProjectManagementRoutingModule,CommonModule
    ],
    exports:[]
})
export class ProjectManagementModule{}