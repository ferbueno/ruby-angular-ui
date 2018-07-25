import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [MaterialInputComponent],
  exports: [MaterialInputComponent]
})
export class AngularMaterialFormControlsModule {}
