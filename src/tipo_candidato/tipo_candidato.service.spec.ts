import { Test, TestingModule } from '@nestjs/testing';
import { TipoCandidatoService } from './tipo_candidato.service';

describe('TipoCandidatoService', () => {
  let service: TipoCandidatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoCandidatoService],
    }).compile();

    service = module.get<TipoCandidatoService>(TipoCandidatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
