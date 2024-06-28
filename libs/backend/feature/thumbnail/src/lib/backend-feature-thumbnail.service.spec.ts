import { Test } from '@nestjs/testing';
import { BackendFeatureThumbnailService } from './backend-feature-thumbnail.service';

describe('BackendFeatureThumbnailService', () => {
  let service: BackendFeatureThumbnailService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendFeatureThumbnailService],
    }).compile();

    service = module.get(BackendFeatureThumbnailService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
