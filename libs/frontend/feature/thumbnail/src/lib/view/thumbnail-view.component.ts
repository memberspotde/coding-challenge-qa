import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThumbnailListComponent } from '../list/thumbnail-list.component';
import { ThumbnailFrontendService } from '../service/thumbnail-frontend.service';
import { MatDialog } from '@angular/material/dialog';
import { ThumbnailDialogComponent } from '../dialog/thumbnail-dialog.component';
import { Thumbnail } from 'shared/model';

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

  items = this.thumbnailService.getThumbnails();

  openCreateDialog() {
    this.dialog.open(ThumbnailDialogComponent, {
      data: {
        thumbnail: null,
      },
      width: '500px',
    });
  }

  openEditDialog(thumbnail: Thumbnail) {
    this.dialog.open(ThumbnailDialogComponent, {
      data: {
        thumbnail,
      },
      width: '500px',
    });
  }

  removeThumbnail(thumbnail: Thumbnail) {
    console.log('removeThumbnail', thumbnail);
  }
}
