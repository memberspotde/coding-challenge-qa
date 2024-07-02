import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'lib-thumbnail-dialog',
  standalone: true,
  templateUrl: './thumbnail-dialog.component.html',
  imports: [MatDialogContent, MatDialogTitle, MatDialogActions],
})
export class ThumbnailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ThumbnailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
