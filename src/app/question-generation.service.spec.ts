import { TestBed } from '@angular/core/testing';

import { QuestionGenerationService } from './question-generation.service';

describe('QuestionGenerationService', () => {
  let service: QuestionGenerationService;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(QuestionGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
