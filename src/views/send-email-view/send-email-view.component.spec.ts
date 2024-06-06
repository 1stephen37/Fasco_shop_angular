import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailViewComponent } from './send-email-view.component';

describe('SendEmailViewComponent', () => {
  let component: SendEmailViewComponent;
  let fixture: ComponentFixture<SendEmailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendEmailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendEmailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
