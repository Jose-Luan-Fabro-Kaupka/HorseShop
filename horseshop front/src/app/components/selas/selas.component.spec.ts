import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelasComponent } from './selas.component';

describe('SelasComponent', () => {
  let component: SelasComponent;
  let fixture: ComponentFixture<SelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
