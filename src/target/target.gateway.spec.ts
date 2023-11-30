import { Test, TestingModule } from '@nestjs/testing';
import { TargetGateway } from './target.gateway';

describe('TargetGateway', () => {
  let gateway: TargetGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TargetGateway],
    }).compile();

    gateway = module.get<TargetGateway>(TargetGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
