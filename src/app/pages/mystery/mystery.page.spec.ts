import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MysteryPage } from './mystery.page';

describe('MysteryPage', () => {
  let component: MysteryPage;
  let fixture: ComponentFixture<MysteryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MysteryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
