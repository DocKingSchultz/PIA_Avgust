import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTabsComponentComponent } from './multiple-tabs-component.component';

describe('MultipleTabsComponentComponent', () => {
  let component: MultipleTabsComponentComponent;
  let fixture: ComponentFixture<MultipleTabsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleTabsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTabsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
