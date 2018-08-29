import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetcherSlideshowComponent } from './fetcher-slideshow.component';

describe('FetcherSlideshowComponent', () => {
  let component: FetcherSlideshowComponent;
  let fixture: ComponentFixture<FetcherSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetcherSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetcherSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
