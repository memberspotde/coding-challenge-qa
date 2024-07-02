import { Thumbnail } from 'shared/model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-thumbnail-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail-list-item.component.html',
})
export class ThumbnailListItemComponent {
  @Input({ required: true }) item!: Thumbnail;

  @Output() edit = new EventEmitter<Thumbnail>();
  @Output() remove = new EventEmitter<Thumbnail>();
}
