import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suplemento2Component } from './suplemento2.component';

describe('Suplemento2Component', () => {
  let component: Suplemento2Component;
  let fixture: ComponentFixture<Suplemento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Suplemento2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Suplemento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
