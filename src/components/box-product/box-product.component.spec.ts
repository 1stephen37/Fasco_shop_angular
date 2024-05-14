import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProductComponent } from './box-product.component';

describe('BoxProductComponent', () => {
  let component: BoxProductComponent;
  let fixture: ComponentFixture<BoxProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
