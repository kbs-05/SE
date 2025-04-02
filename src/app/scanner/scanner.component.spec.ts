import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCannerComponent } from './scanner.component';

describe('SCannerComponent', () => {
  let component: SCannerComponent;
  let fixture: ComponentFixture<SCannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SCannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
