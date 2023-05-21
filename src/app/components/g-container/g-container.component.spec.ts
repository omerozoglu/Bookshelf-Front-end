import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GContainerComponent } from './g-container.component';

describe('GContainerComponent', () => {
  let component: GContainerComponent;
  let fixture: ComponentFixture<GContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
