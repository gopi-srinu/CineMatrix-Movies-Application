import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedMoviePage } from './selected-movie.page';

describe('SelectedMoviePage', () => {
  let component: SelectedMoviePage;
  let fixture: ComponentFixture<SelectedMoviePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
