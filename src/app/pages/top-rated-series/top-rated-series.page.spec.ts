import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopRatedSeriesPage } from './top-rated-series.page';

describe('TopRatedSeriesPage', () => {
  let component: TopRatedSeriesPage;
  let fixture: ComponentFixture<TopRatedSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
