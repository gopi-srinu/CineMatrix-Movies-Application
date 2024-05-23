import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThisWeekTrendingSeriesPage } from './this-week-trending-series.page';

describe('ThisWeekTrendingSeriesPage', () => {
  let component: ThisWeekTrendingSeriesPage;
  let fixture: ComponentFixture<ThisWeekTrendingSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisWeekTrendingSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
