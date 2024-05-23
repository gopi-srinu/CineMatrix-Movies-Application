import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThrillerPage } from './thriller.page';

describe('ThrillerPage', () => {
  let component: ThrillerPage;
  let fixture: ComponentFixture<ThrillerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrillerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
