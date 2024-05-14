import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchersViewComponent } from './vouchers-view.component';

describe('VouchersViewComponent', () => {
  let component: VouchersViewComponent;
  let fixture: ComponentFixture<VouchersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VouchersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VouchersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
