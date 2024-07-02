import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Thumbnail } from 'shared/model';

@Injectable({
  providedIn: 'root',
})
export class ThumbnailFrontendService {
  private http = inject(HttpClient);

  getThumbnails() {
    return this.http.get<Thumbnail[]>('http://localhost:3000/api/thumbnails');
  }
}
