import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesViewComponent } from './deliveries-view.component';

describe('DeliveriesViewComponent', () => {
  let component: DeliveriesViewComponent;
  let fixture: ComponentFixture<DeliveriesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveriesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
