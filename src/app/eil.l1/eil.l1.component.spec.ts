import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EILL1Component } from './eil.l1.component';

describe('EILL1Component', () => {
  let component: EILL1Component;
  let fixture: ComponentFixture<EILL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EILL1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EILL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
