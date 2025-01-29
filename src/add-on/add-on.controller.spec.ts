import { Test, TestingModule } from '@nestjs/testing';
import { AddOnController } from './add-on.controller';

describe('AddOnController', () => {
  let controller: AddOnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddOnController],
    }).compile();

    controller = module.get<AddOnController>(AddOnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
