import { PhotosModule } from './photos.module';

describe('photosModule', () => {
  let photosModule: PhotosModule;

  beforeEach(() => {
    photosModule = new PhotosModule();
  });

  it('should create an instance', () => {
    expect(photosModule).toBeTruthy();
  });
});
