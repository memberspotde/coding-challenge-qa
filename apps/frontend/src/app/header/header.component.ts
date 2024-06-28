import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title = 'frontend';
}
