import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedSeriesPage } from './selected-series.page';

describe('SelectedSeriesPage', () => {
  let component: SelectedSeriesPage;
  let fixture: ComponentFixture<SelectedSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
