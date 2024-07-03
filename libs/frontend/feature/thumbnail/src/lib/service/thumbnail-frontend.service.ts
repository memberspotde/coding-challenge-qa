import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BACKEND_URL } from 'frontend/shared/common';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Thumbnail } from 'shared/model';

@Injectable({
  providedIn: 'root',
})
export class ThumbnailFrontendService {
  private _subject = new BehaviorSubject<Thumbnail[]>([]);
  private _data$!: Observable<Thumbnail[]>;

  private http = inject(HttpClient);
  private backendUrl = inject(BACKEND_URL);

  get data() {
    if (!this._data$) {
      this._data$ = this._subject.asObservable();
      this.loadThumbnails().subscribe();
    }

    return this._data$;
  }

  private loadThumbnails() {
    return this.http
      .get<Thumbnail[]>(`${this.backendUrl}/thumbnails`)
      .pipe(tap((data) => this._subject.next(data)));
  }

  create(name: string, file: File, description?: string) {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('name', name);

    if (description) {
      formData.append('description', description);
    }

    return this.http
      .post<Thumbnail>(`${this.backendUrl}/thumbnails`, formData)
      .pipe(
        tap((thumbnail) => {
          this._subject.next([...this._subject.value, thumbnail]);
        })
      );
  }

  edit(id: number, name: string, description?: string) {
    return this.http
      .patch<Thumbnail>(`${this.backendUrl}/thumbnail/${id}`, {
        name,
        description,
      })
      .pipe(
        tap((thumbnail) => {
          this._subject.next(
            this._subject.value.map((t) =>
              t.id === thumbnail.id ? thumbnail : t
            )
          );
        })
      );
  }

  remove(thumbnail: Thumbnail) {
    this._subject.next(
      this._subject.value.filter((t) => t.id !== thumbnail.id)
    );

    return this.http.delete(`${this.backendUrl}/thumbnail/${thumbnail.id}`);
  }
}
