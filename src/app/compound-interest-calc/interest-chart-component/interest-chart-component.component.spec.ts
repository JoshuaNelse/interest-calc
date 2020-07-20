import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestChartComponentComponent } from './interest-chart-component.component';

describe('InterestChartComponentComponent', () => {
  let component: InterestChartComponentComponent;
  let fixture: ComponentFixture<InterestChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
