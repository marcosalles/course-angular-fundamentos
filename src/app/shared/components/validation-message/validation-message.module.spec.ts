import { ValidationMessageModule } from './validation-message.module';

describe('ValidationMessageModule', () => {
  let validationMessageModule: ValidationMessageModule;

  beforeEach(() => {
    validationMessageModule = new ValidationMessageModule();
  });

  it('should create an instance', () => {
    expect(validationMessageModule).toBeTruthy();
  });
});