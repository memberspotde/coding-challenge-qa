import { TypeOrmModule } from '@nestjs/typeorm';
import { ThumbnailController } from './thumbnail.controller';
import { ThumbnailService } from './thumbnail.service';
import { ThumbnailRepository } from './thumbnail.repository';
import { Module } from '@nestjs/common';
import { Thumbnail } from './entities/thumbnail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Thumbnail])],
  controllers: [ThumbnailController],
  providers: [ThumbnailService, ThumbnailRepository],
})
export class ThumbnailModule {}
