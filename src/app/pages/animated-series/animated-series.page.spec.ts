import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimatedSeriesPage } from './animated-series.page';

describe('AnimatedSeriesPage', () => {
  let component: AnimatedSeriesPage;
  let fixture: ComponentFixture<AnimatedSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
