import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-thumbnail-dialog',
  standalone: true,
  templateUrl: './thumbnail-dialog.component.html',
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    MatIcon,
    MatButton,
    MatPrefix,
  ],
})
export class ThumbnailDialogComponent {
  thumbnailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    file: new FormControl({ value: '', disabled: false }, [
      Validators.required,
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<ThumbnailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    const fileName = input.files?.item(0)?.name;

    if (!fileName) {
      return;
    }

    if (input.files && input.files.length > 0) {
      this.thumbnailForm.get('file')?.patchValue(fileName);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.thumbnailForm.valid) {
      // Handle the save action
      console.log(this.thumbnailForm.value);
      this.dialogRef.close(this.thumbnailForm.value);
    }
  }
}
