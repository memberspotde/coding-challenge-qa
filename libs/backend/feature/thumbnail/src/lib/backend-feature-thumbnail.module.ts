import { Module } from '@nestjs/common';
import { ThumbnailController } from './thumbnail.controller';
import { ThumbnailService } from './thumbnail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thumbnail } from './entities/thumbnail.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([Thumbnail]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/images',
    }),
  ],
  controllers: [ThumbnailController],
  providers: [ThumbnailService],
})
export class BackendFeatureThumbnailModule {}
