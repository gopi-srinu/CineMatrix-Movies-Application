import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrimeSeriesPage } from './crime-series.page';

describe('CrimeSeriesPage', () => {
  let component: CrimeSeriesPage;
  let fixture: ComponentFixture<CrimeSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
