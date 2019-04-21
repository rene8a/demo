import { Component, OnInit, Input } from '@angular/core';
import { TargetCompany } from '../../../interfaces/target-company';

@Component({
  selector: 'lib-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() data: TargetCompany;
  constructor() { }

  ngOnInit() {
  }

}
