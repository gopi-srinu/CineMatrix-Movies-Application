import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MysterySeriesPage } from './mystery-series.page';

describe('MysterySeriesPage', () => {
  let component: MysterySeriesPage;
  let fixture: ComponentFixture<MysterySeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MysterySeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
