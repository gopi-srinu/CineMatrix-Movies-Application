import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarPage } from './war.page';

describe('WarPage', () => {
  let component: WarPage;
  let fixture: ComponentFixture<WarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
