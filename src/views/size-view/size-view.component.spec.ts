import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeViewComponent } from './size-view.component';

describe('SizeViewComponent', () => {
  let component: SizeViewComponent;
  let fixture: ComponentFixture<SizeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SizeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
