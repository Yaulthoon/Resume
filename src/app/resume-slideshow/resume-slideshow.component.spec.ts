import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSlideshowComponent } from './resume-slideshow.component';

describe('ResumeSlideshowComponent', () => {
  let component: ResumeSlideshowComponent;
  let fixture: ComponentFixture<ResumeSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
