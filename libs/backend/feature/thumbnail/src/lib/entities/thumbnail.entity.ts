import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thumbnail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  fileWithPath!: string;

  @Column()
  fileName!: string;
}
