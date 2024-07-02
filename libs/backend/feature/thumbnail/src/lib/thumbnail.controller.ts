import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { CreateThumbnailDto, UpdateThumbnailDto } from 'shared/model';
import { ThumbnailService } from './thumbnail.service';

@Controller('thumbnails')
export class ThumbnailController {
  constructor(private thumbnailService: ThumbnailService) {}

  @Get()
  async getAll() {
    return this.thumbnailService.getAll();
  }

  @Get(':id')
  async get(id: number) {
    return this.thumbnailService.get(id);
  }

  @Post()
  create(@Body() thumbnail: CreateThumbnailDto) {
    return this.thumbnailService.create(
      thumbnail.name,
      thumbnail.url,
      thumbnail.description
    );
  }

  @Patch()
  update(@Body() thumbnail: UpdateThumbnailDto) {
    return this.thumbnailService.update(
      thumbnail.id,
      thumbnail.name,
      thumbnail.url,
      thumbnail.description
    );
  }

  @Delete(':id')
  delete(id: number) {
    return this.thumbnailService.delete(id);
  }
}
