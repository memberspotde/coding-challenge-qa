import { Module } from '@nestjs/common';
import { BackendFeatureThumbnailController } from './backend-feature-thumbnail.controller';
import { BackendFeatureThumbnailService } from './backend-feature-thumbnail.service';

@Module({
  controllers: [BackendFeatureThumbnailController],
  providers: [BackendFeatureThumbnailService],
  exports: [BackendFeatureThumbnailService],
})
export class BackendFeatureThumbnailModule {}
