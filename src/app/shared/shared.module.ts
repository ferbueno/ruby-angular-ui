import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LoadingSpinnerComponent, ConfirmationDialogComponent],
  exports: [LoadingSpinnerComponent, ConfirmationDialogComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class SharedModule { }
