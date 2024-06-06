import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerehouseViewComponent } from './werehouse-view.component';

describe('WerehouseViewComponent', () => {
  let component: WerehouseViewComponent;
  let fixture: ComponentFixture<WerehouseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WerehouseViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WerehouseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
