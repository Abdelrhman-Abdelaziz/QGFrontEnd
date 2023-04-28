import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGenerationComponent } from './question-generation.component';

describe('QuestionGenerationComponent', () => {
  let component: QuestionGenerationComponent;
  let fixture: ComponentFixture<QuestionGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

