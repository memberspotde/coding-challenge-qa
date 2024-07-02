import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thumbnail } from './entities/thumbnail.entity';

@Injectable()
export class ThumbnailService {
  constructor(
    @InjectRepository(Thumbnail)
    private thumbnailRepository: Repository<Thumbnail>
  ) {}

  getAll() {
    return this.thumbnailRepository.find();
  }

  create(name: string, url: string, description?: string) {
    const thumbnail = this.thumbnailRepository.create({
      name,
      url,
      description,
    });

    return this.thumbnailRepository.save(thumbnail);
  }

  get(id: number) {
    return this.thumbnailRepository.findOneBy({ id });
  }

  async update(id: number, name: string, url: string, description?: string) {
    const thumbnail = await this.get(id);

    if (!thumbnail) {
      throw new Error('Thumbnail not found');
    }

    Object.assign(thumbnail, { name, url, description });

    return this.thumbnailRepository.save(thumbnail);
  }

  async delete(id: number) {
    const thumbnail = await this.get(id);

    if (!thumbnail) {
      return;
    }

    return this.thumbnailRepository.remove(thumbnail);
  }
}
