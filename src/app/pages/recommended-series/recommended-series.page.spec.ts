import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendedSeriesPage } from './recommended-series.page';

describe('RecommendedSeriesPage', () => {
  let component: RecommendedSeriesPage;
  let fixture: ComponentFixture<RecommendedSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
