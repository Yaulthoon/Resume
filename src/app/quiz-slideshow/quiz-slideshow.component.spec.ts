import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSlideshowComponent } from './quiz-slideshow.component';

describe('QuizSlideshowComponent', () => {
  let component: QuizSlideshowComponent;
  let fixture: ComponentFixture<QuizSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
