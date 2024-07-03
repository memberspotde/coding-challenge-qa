import { Module } from '@nestjs/common';

import {
  BackendFeatureThumbnailModule,
  Thumbnail,
} from 'backend/feature/thumbnail';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Thumbnail],
      synchronize: true,
    }),
    BackendFeatureThumbnailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
