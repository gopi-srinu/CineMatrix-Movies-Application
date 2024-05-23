import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionAndAdventureSeriesPage } from './action-and-adventure-series.page';

describe('ActionAndAdventureSeriesPage', () => {
  let component: ActionAndAdventureSeriesPage;
  let fixture: ComponentFixture<ActionAndAdventureSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionAndAdventureSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
