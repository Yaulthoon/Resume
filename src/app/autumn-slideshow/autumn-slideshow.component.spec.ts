import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutumnSlideshowComponent } from './autumn-slideshow.component';

describe('AutumnSlideshowComponent', () => {
  let component: AutumnSlideshowComponent;
  let fixture: ComponentFixture<AutumnSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutumnSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutumnSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
