import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BackendFeatureThumbnailModule } from 'backend/feature/thumbnail';

@Module({
  imports: [BackendFeatureThumbnailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
