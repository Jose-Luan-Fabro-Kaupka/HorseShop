import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suplemento1Component } from './suplemento1.component';

describe('Suplemento1Component', () => {
  let component: Suplemento1Component;
  let fixture: ComponentFixture<Suplemento1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Suplemento1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Suplemento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
