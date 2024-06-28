import { Controller } from '@nestjs/common';
import { BackendFeatureThumbnailService } from './backend-feature-thumbnail.service';

@Controller('backend-feature-thumbnail')
export class BackendFeatureThumbnailController {
  constructor(
    private backendFeatureThumbnailService: BackendFeatureThumbnailService
  ) {}
}
