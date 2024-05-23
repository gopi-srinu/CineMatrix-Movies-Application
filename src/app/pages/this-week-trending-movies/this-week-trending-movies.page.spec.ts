import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThisWeekTrendingMoviesPage } from './this-week-trending-movies.page';

describe('ThisWeekTrendingMoviesPage', () => {
  let component: ThisWeekTrendingMoviesPage;
  let fixture: ComponentFixture<ThisWeekTrendingMoviesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisWeekTrendingMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
