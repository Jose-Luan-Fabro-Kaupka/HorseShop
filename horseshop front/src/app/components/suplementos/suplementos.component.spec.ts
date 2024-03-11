import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementosComponent } from './suplementos.component';

describe('SuplementosComponent', () => {
  let component: SuplementosComponent;
  let fixture: ComponentFixture<SuplementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuplementosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuplementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
