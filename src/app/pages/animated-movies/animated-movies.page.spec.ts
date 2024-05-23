import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimatedMoviesPage } from './animated-movies.page';

describe('AnimatedMoviesPage', () => {
  let component: AnimatedMoviesPage;
  let fixture: ComponentFixture<AnimatedMoviesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
