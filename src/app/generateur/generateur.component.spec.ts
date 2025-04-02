import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GENERATEURComponent } from './generateur.component';

describe('GENERATEURComponent', () => {
  let component: GENERATEURComponent;
  let fixture: ComponentFixture<GENERATEURComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GENERATEURComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GENERATEURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
