import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectManagementComponent } from './project-management.component';

import { ProjectConfigComponent } from './project-config/project-config.component';
import { BaselineConfigComponent } from './baseline-config/baseline-config.component';
import { PendingApprovalsComponent } from './pending-approvals/pending-approvals.component';
import { NewTrackComponent } from './new-track/new-track.component';
import { ProjectConfigNewComponent } from './project-config-new/project-config-new.component';



const ProjectManagementRoutes: Routes = [
    {
        path: '',
        component: ProjectManagementComponent,
        children: [
            { path: 'config', component: ProjectConfigComponent },
            { path: 'config-new', component: ProjectConfigNewComponent },
            { path: 'baseline', component: BaselineConfigComponent },
            { path: 'pending-approval', component: PendingApprovalsComponent },
            { path: 'new-track', component: NewTrackComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(ProjectManagementRoutes)],
    exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }