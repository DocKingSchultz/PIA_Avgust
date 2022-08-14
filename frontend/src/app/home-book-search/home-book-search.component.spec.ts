import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookSearchComponent } from './home-book-search.component';

describe('HomeBookSearchComponent', () => {
  let component: HomeBookSearchComponent;
  let fixture: ComponentFixture<HomeBookSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBookSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
