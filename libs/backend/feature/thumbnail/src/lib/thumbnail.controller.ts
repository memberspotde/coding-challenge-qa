import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import {
  CreateThumbnailDto,
  UpdateThumbnailDto,
} from './validation/thumbnail.dto';
import { ThumbnailService } from './thumbnail.service';
import { Express } from 'express';
import 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Thumbnails')
@Controller('thumbnails')
export class ThumbnailController {
  constructor(private thumbnailService: ThumbnailService) {}

  @Get()
  @ApiOperation({ summary: 'Gets all thumbnails' })
  async getAll() {
    return this.thumbnailService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Gets thumbnail by id' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the thumbnail' })
  async get(@Param('id', ParseIntPipe) id: number) {
    return this.thumbnailService.get(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({ type: CreateThumbnailDto })
  @ApiOperation({ summary: 'Create a new thumbnail' })
  @ApiConsumes('multipart/form-data')
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
  @ApiBody({ type: UpdateThumbnailDto })
  @ApiOperation({ summary: 'Edit name and description of' })
  update(@Body() thumbnail: UpdateThumbnailDto) {
    return this.thumbnailService.update(
      thumbnail.id,
      thumbnail.name,
      thumbnail.description
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Removes thumbnail' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the thumbnail' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.thumbnailService.delete(id);
  }
}
