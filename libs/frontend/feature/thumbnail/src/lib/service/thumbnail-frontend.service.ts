import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Thumbnail } from 'shared/model';
import { BACKEND_URL } from 'frontend/shared/common';

@Injectable({
  providedIn: 'root',
})
export class ThumbnailFrontendService {
  private http = inject(HttpClient);
  private backendUrl = inject(BACKEND_URL);

  getThumbnails() {
    return this.http.get<Thumbnail[]>(`${this.backendUrl}/api/thumbnails`);
  }
}
