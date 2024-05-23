import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarAndpoliticalSeriesPage } from './war-andpolitical-series.page';

describe('WarAndpoliticalSeriesPage', () => {
  let component: WarAndpoliticalSeriesPage;
  let fixture: ComponentFixture<WarAndpoliticalSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarAndpoliticalSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
