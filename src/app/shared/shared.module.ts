import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [LoadingSpinnerComponent,CustomTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbModule,
    NgxPaginationModule
  ],
  exports:[LoadingSpinnerComponent,CustomTableComponent]
})
export class SharedModule { }
