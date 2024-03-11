import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Racao2Component } from './racao2.component';

describe('Racao2Component', () => {
  let component: Racao2Component;
  let fixture: ComponentFixture<Racao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Racao2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Racao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
