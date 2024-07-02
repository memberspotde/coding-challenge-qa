import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Thumbnail } from 'shared/model';
import { ThumbnailListItemComponent } from './list-item/thumbnail-list-item.component';
import { ThumbnailListAddItemComponent } from './list-add-item/thumbnail-list-add-item.component';

@Component({
  selector: 'lib-thumbnail-list',
  standalone: true,
  imports: [
    CommonModule,
    ThumbnailListItemComponent,
    ThumbnailListAddItemComponent,
  ],
  templateUrl: './thumbnail-list.component.html',
})
export class ThumbnailListComponent {
  @Input({ required: true }) items!: Thumbnail[] | null;
}
