import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DramaSeriesPage } from './drama-series.page';

describe('DramaSeriesPage', () => {
  let component: DramaSeriesPage;
  let fixture: ComponentFixture<DramaSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
