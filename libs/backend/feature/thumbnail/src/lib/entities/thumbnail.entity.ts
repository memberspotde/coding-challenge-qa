import { Thumbnail as ThumbnailModel } from 'shared/model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thumbnail implements ThumbnailModel {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  url!: string;
}
