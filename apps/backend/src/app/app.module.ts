import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import {
  BackendFeatureThumbnailModule,
  Thumbnail,
} from 'backend/feature/thumbnail';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BackendFeatureThumbnailModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Thumbnail],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
