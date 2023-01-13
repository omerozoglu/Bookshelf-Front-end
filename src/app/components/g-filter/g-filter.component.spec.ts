import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GFilterComponent } from './g-filter.component';

describe('GFilterComponent', () => {
  let component: GFilterComponent;
  let fixture: ComponentFixture<GFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
