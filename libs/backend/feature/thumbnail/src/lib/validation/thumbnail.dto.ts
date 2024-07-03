import {
  CreateThumbnailDto as ICreateThumbnailDto,
  UpdateThumbnailDto as IUpdateThumbnailDto,
} from 'shared/model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateThumbnailDto implements ICreateThumbnailDto {
  @ApiProperty({ description: 'Name of the thumbnail' })
  name!: string;

  @ApiProperty({ description: 'Description of the thumbnail' })
  description?: string;
}

export class UpdateThumbnailDto
  extends CreateThumbnailDto
  implements IUpdateThumbnailDto
{
  @ApiProperty({ description: 'ID of the thumbnail' })
  id!: number;
}
