import { Module } from '@nestjs/common';
import { ThumbnailController } from './thumbnail.controller';
import { ThumbnailService } from './thumbnail.service';
import { ThumbnailRepository } from './thumbnail.repository';

@Module({
  controllers: [ThumbnailController],
  providers: [ThumbnailService, ThumbnailRepository],
  exports: [ThumbnailService],
})
export class BackendFeatureThumbnailModule {}
