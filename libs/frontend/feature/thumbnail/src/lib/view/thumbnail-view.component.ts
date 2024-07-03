import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThumbnailListComponent } from '../list/thumbnail-list.component';
import { ThumbnailFrontendService } from '../service/thumbnail-frontend.service';
import { MatDialog } from '@angular/material/dialog';
import { ThumbnailDialogComponent } from '../dialog/thumbnail-dialog.component';
import { Thumbnail } from 'shared/model';
import { ThumbnailDialogCloseEvent } from '../dialog/thumbnail-dialog.model';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'lib-thumbnail-view',
  standalone: true,
  imports: [CommonModule, ThumbnailListComponent],
  templateUrl: './thumbnail-view.component.html',
  styleUrl: './thumbnail-view.component.css',
})
export class ThumbnailViewComponent {
  private thumbnailService = inject(ThumbnailFrontendService);
  public dialog = inject(MatDialog);

  items = this.thumbnailService.data;

  openCreateDialog() {
    const dialogRef = this.dialog.open(ThumbnailDialogComponent, {
      data: {
        thumbnail: null,
      },
      width: '500px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((result: ThumbnailDialogCloseEvent) => {
          if (!result) {
            return of(null);
          }

          return this.thumbnailService.create(
            result.name,
            result.file,
            result.description
          );
        })
      )
      .subscribe({
        error: (error) => {
          console.error('Error', error);
        },
      });
  }

  openEditDialog(thumbnail: Thumbnail) {
    const dialogRef = this.dialog.open(ThumbnailDialogComponent, {
      data: {
        thumbnail,
      },
      width: '500px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((result: ThumbnailDialogCloseEvent) => {
          if (!result) {
            return of(null);
          }

          return this.thumbnailService.edit(
            thumbnail.id,
            result.name,
            result.description
          );
        })
      )
      .subscribe({
        error: (error) => {
          console.error('Error', error);
        },
      });
  }

  removeThumbnail(thumbnail: Thumbnail) {
    this.thumbnailService.remove(thumbnail).subscribe({
      error: (error) => {
        console.error('Error', error);
      },
    });
  }
}
