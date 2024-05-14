import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordViewComponent } from './forget-password-view.component';

describe('ForgetPasswordViewComponent', () => {
  let component: ForgetPasswordViewComponent;
  let fixture: ComponentFixture<ForgetPasswordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgetPasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
