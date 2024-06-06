import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() type : string = '';
  @ViewChild('hide') form! : ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    if(this.form) this.hide();
  }

  ngOnInit() {
  }

  hide(){
    this.form.nativeElement.style.display = 'none';
  }

  show() {
    this.form.nativeElement.style.display = 'block';
  }
}
