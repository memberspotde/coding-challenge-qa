import { Controller, Get } from '@nestjs/common';

import { ThumbnailService } from './thumbnail.service';

@Controller('thumbnails')
export class ThumbnailController {
  constructor(private thumbnailService: ThumbnailService) {}

  @Get()
  async getThumbnails() {
    return this.thumbnailService.getThumbnails();
  }
}
