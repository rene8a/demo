import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonType } from '../enums/button-type.enum';

@Component({
  selector: 'lib-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  @Input() type: ButtonType;
  @Input() enabled = true;
  @Input() icon: string;
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  buttonType = ButtonType;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit();
  }

}
