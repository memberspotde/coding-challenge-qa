import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title = 'frontend';
}
