import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HelpDialogComponent as HelpDialogComponent } from './help-dialog.component';

@NgModule({
  declarations: [HelpDialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [HelpDialogComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}}
  ]
})

export class HelpDialogModule{}
