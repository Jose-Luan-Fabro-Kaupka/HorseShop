import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacoesComponent } from './racoes.component';

describe('RacoesComponent', () => {
  let component: RacoesComponent;
  let fixture: ComponentFixture<RacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
