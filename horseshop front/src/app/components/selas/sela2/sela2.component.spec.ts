import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sela2Component } from './sela2.component';

describe('Sela2Component', () => {
  let component: Sela2Component;
  let fixture: ComponentFixture<Sela2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sela2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sela2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
