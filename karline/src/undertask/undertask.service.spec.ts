import { Test, TestingModule } from '@nestjs/testing';
import { UnderTaskService } from './undertask.service';

describe('TaskService', () => {
  let service: UnderTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnderTaskService],
    }).compile();

    service = module.get<UnderTaskService>(UnderTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});