import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamilySeriesPage } from './family-series.page';

describe('FamilySeriesPage', () => {
  let component: FamilySeriesPage;
  let fixture: ComponentFixture<FamilySeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilySeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
