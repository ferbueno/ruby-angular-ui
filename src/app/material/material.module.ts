import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    // Form controls
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // Navigation
    MatMenuModule,
    // Layout
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    // Buttons & Indicators
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    // Popups and modals
    MatDialogModule,
    MatTooltipModule,
    // Data table
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    // Form controls
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // Navigation
    MatMenuModule,
    // Layout
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    // Buttons & Indicators
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    // Popups and modals
    MatDialogModule,
    MatTooltipModule,
    // Data table
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule {}
