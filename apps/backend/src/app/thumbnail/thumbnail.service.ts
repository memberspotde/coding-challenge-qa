import { Injectable } from '@nestjs/common';
import { ThumbnailRepository } from './thumbnail.repository';

@Injectable()
export class ThumbnailService {
  constructor(private thumbnailRepository: ThumbnailRepository) {}

  getThumbnails() {
    return this.thumbnailRepository.getThumbnails();
  }
}
