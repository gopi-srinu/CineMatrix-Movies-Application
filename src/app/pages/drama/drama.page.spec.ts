import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DramaPage } from './drama.page';

describe('DramaPage', () => {
  let component: DramaPage;
  let fixture: ComponentFixture<DramaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
