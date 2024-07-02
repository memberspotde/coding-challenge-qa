import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BackendFeatureThumbnailModule } from 'backend/feature/thumbnail';
import { ThumbnailController } from './thumbnail/thumbnail.controller';
import { ThumbnailService } from './thumbnail/thumbnail.service';
import { ThumbnailRepository } from './thumbnail/thumbnail.repository';

@Module({
  imports: [BackendFeatureThumbnailModule],
  controllers: [AppController, ThumbnailController],
  providers: [AppService, ThumbnailService, ThumbnailRepository],
})
export class AppModule {}
