import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpcomingSeriesPage } from './upcoming-series.page';

describe('UpcomingSeriesPage', () => {
  let component: UpcomingSeriesPage;
  let fixture: ComponentFixture<UpcomingSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
