import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Racao1Component } from './racao1.component';

describe('Racao1Component', () => {
  let component: Racao1Component;
  let fixture: ComponentFixture<Racao1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Racao1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Racao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
