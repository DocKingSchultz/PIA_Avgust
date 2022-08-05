import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDataTableComponent } from './pagination-data-table.component';

describe('PaginationDataTableComponent', () => {
  let component: PaginationDataTableComponent;
  let fixture: ComponentFixture<PaginationDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
