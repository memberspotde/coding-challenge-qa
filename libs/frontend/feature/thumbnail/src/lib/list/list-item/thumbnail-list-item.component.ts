import { Thumbnail } from 'shared/model';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-thumbnail-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail-list-item.component.html',
})
export class ThumbnailListItemComponent {
  @Input({ required: true }) item!: Thumbnail;
}
