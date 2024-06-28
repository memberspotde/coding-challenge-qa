import { Test } from '@nestjs/testing';
import { BackendFeatureThumbnailController } from './backend-feature-thumbnail.controller';
import { BackendFeatureThumbnailService } from './backend-feature-thumbnail.service';

describe('BackendFeatureThumbnailController', () => {
  let controller: BackendFeatureThumbnailController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendFeatureThumbnailService],
      controllers: [BackendFeatureThumbnailController],
    }).compile();

    controller = module.get(BackendFeatureThumbnailController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
