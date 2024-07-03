import { Component, Inject, OnInit } from '@angular/core';
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
import { Thumbnail } from 'shared/model';

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
export class ThumbnailDialogComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl({ value: -1, disabled: true }),
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    fileName: new FormControl({ value: '', disabled: false }, [
      Validators.required,
    ]),
    file: new FormControl<File | null>(null, {
      validators: [Validators.required],
    }),
  });

  get isNew() {
    return !this.data?.thumbnail?.id;
  }

  constructor(
    public dialogRef: MatDialogRef<ThumbnailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { thumbnail: Thumbnail }
  ) {}

  ngOnInit(): void {
    if (!this.data) {
      return;
    }

    this.form.patchValue({
      id: this.data.thumbnail.id,
      name: this.data.thumbnail.name,
      description: this.data.thumbnail.description,
      fileName: this.data.thumbnail.url,
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    const fileName = input.files?.item(0)?.name;

    if (!fileName) {
      return;
    }

    if (input.files && input.files.length > 0) {
      this.form.get('fileName')?.patchValue(fileName);

      const file = input.files[0];

      if (!file) {
        return;
      }

      this.form.get('file')?.patchValue(file);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {
      // Handle the save action
      this.dialogRef.close(this.form.value);
    }
  }
}
