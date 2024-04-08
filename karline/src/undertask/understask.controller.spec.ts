import { Test, TestingModule } from '@nestjs/testing';
import { UnderTaskController } from './undertask.controller';


describe('UnderTaskController', () => {
  let controller: UnderTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnderTaskController],
    }).compile();

    controller = module.get<UnderTaskController>(UnderTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});