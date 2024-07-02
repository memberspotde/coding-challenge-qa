import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThumbnailListComponent } from '../list/thumbnail-list.component';
import { ThumbnailFrontendService } from '../service/thumbnail-frontend.service';

@Component({
  selector: 'lib-thumbnail-view',
  standalone: true,
  imports: [CommonModule, ThumbnailListComponent],
  templateUrl: './thumbnail-view.component.html',
  styleUrl: './thumbnail-view.component.css',
})
export class ThumbnailViewComponent {
  private thumbnailService = inject(ThumbnailFrontendService);

  items = this.thumbnailService.getThumbnails();
}
