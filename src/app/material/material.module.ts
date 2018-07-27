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
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
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
    MatToolbarModule,
    // Layout
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    // Buttons & Indicators
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    // Popups and modals
    MatDialogModule,
    MatSnackBarModule,
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
    MatToolbarModule,
    // Layout
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    // Buttons & Indicators
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    // Popups and modals
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    // Data table
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule {}
