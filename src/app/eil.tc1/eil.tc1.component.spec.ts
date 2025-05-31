import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EILTC1Component } from './eil.tc1.component';

describe('EILTC1Component', () => {
  let component: EILTC1Component;
  let fixture: ComponentFixture<EILTC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EILTC1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EILTC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
