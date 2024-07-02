import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-thumbnail-list-add-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail-list-add-item.component.html',
})
export class ThumbnailListAddItemComponent {
  @Output() add = new EventEmitter<void>();
}
