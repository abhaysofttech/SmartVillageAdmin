import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModalComponent } from './common-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,,
        FormsModule,
        ReactiveFormsModule],
    declarations: [CommonModalComponent],
    exports: [CommonModalComponent]
})
export class ModalModule { }