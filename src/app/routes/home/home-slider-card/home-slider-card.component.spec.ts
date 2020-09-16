import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderCardComponent } from './home-slider-card.component';

describe('HomeSliderCardComponent', () => {
  let component: HomeSliderCardComponent;
  let fixture: ComponentFixture<HomeSliderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSliderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSliderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
