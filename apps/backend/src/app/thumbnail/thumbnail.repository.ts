import { Thumbnail } from 'shared/model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ThumbnailRepository {
  getThumbnails(): Promise<Thumbnail[]> {
    return Promise.resolve([
      {
        id: '1',
        name: 'Thumbnail 1',
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        id: '2',
        name: 'Thumbnail 2',
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        description: 'This is a description of thumbnail 2',
      },
      {
        id: '3',
        name: 'Thumbnail 3',
        url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
    ]);
  }
}
