import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { CreateThumbnailDto, UpdateThumbnailDto } from 'shared/model';
import { ThumbnailService } from './thumbnail.service';
import { Express } from 'express';
import 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() thumbnail: CreateThumbnailDto
  ) {
    return this.thumbnailService.create(
      thumbnail.name,
      file,
      thumbnail.description
    );
  }

  @Patch()
  update(@Body() thumbnail: UpdateThumbnailDto) {
    return this.thumbnailService.update(
      thumbnail.id,
      thumbnail.name,
      thumbnail.description
    );
  }

  @Delete(':id')
  delete(id: number) {
    return this.thumbnailService.delete(id);
  }
}
