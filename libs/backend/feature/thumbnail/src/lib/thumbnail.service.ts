import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thumbnail } from './entities/thumbnail.entity';
import { join } from 'path';
import { writeFile } from 'fs/promises';
import * as fs from 'fs-extra';

@Injectable()
export class ThumbnailService {
  constructor(
    @InjectRepository(Thumbnail)
    private thumbnailRepository: Repository<Thumbnail>
  ) {}

  async getAll() {
    const all = await this.thumbnailRepository.find();

    return all.map(this.mapToThumbnailWithUrl);
  }

  async create(name: string, file: Express.Multer.File, description?: string) {
    const [fileName, fileWithPath] = await this.uploadFile(file);

    console.log('savedFilePath', fileWithPath);
    console.log('fileName', fileName);

    const thumbnail = this.thumbnailRepository.create({
      name,
      fileWithPath,
      fileName,
      description,
    });

    const dbItem = await this.thumbnailRepository.save(thumbnail);

    console.log('dbItem', dbItem);

    return this.mapToThumbnailWithUrl(dbItem);
  }

  get(id: number) {
    return this.thumbnailRepository.findOneBy({ id });
  }

  async update(id: number, name: string, description?: string) {
    const thumbnail = await this.get(id);

    if (!thumbnail) {
      throw new Error('Thumbnail not found');
    }

    Object.assign(thumbnail, { name, description });

    return this.thumbnailRepository.save(thumbnail);
  }

  async delete(id: number) {
    const thumbnail = await this.get(id);

    if (!thumbnail) {
      return;
    }

    return this.thumbnailRepository.remove(thumbnail);
  }

  private async uploadFile(file: Express.Multer.File) {
    try {
      await fs.ensureDir(join(__dirname, '..', 'uploads'));
    } catch (err) {
      console.log('Error creating directory', err);
    }

    const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
    const fileName = `${timestamp}_${file.originalname
      .trim()
      .replace(/\s+/g, '_')}`;

    const uploadPath = join(__dirname, '..', 'uploads', fileName);

    await writeFile(uploadPath, file.buffer);

    return [fileName, uploadPath];
  }

  private mapToThumbnailWithUrl(item: Thumbnail) {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      url: 'http://localhost:3000/images/' + item.fileName,
    };
  }
}
