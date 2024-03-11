import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sela1Component } from './sela1.component';

describe('Sela1Component', () => {
  let component: Sela1Component;
  let fixture: ComponentFixture<Sela1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sela1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sela1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
