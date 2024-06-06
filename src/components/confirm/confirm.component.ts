import {Component, ElementRef, Input, Output, ViewChild, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  @ViewChild('confirm') confirm! : ElementRef;
  @Input() message!: string;
  @Output() delete : EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngAfterViewInit() {
    if(this.confirm) this.hide();
  }

  confirmClick() {
    this.delete.emit();
  }

  hide() {
    this.confirm.nativeElement.style.display = 'none';
  }

  show() {
    this.confirm.nativeElement.style.display = 'flex';
  }
}
