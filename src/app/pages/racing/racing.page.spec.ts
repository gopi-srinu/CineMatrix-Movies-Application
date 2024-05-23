import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacingPage } from './racing.page';

describe('RacingPage', () => {
  let component: RacingPage;
  let fixture: ComponentFixture<RacingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
