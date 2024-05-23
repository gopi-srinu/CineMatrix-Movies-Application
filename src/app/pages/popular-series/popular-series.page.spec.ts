import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularSeriesPage } from './popular-series.page';

describe('PopularSeriesPage', () => {
  let component: PopularSeriesPage;
  let fixture: ComponentFixture<PopularSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
