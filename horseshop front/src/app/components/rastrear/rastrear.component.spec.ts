import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastrearComponent } from './rastrear.component';

describe('RastrearComponent', () => {
  let component: RastrearComponent;
  let fixture: ComponentFixture<RastrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RastrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RastrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
