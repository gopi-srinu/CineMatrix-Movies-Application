import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComedySeriesPage } from './comedy-series.page';

describe('ComedySeriesPage', () => {
  let component: ComedySeriesPage;
  let fixture: ComponentFixture<ComedySeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedySeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
