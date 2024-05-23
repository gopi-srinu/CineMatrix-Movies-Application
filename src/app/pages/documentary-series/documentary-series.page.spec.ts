import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentarySeriesPage } from './documentary-series.page';

describe('DocumentarySeriesPage', () => {
  let component: DocumentarySeriesPage;
  let fixture: ComponentFixture<DocumentarySeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentarySeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
