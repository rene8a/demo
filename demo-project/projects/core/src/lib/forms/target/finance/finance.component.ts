import { Component, OnInit, Input } from '@angular/core';
import { TargetCompany } from '../../../interfaces/target-company';

@Component({
  selector: 'lib-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  @Input() data: TargetCompany;

  constructor() { }

  ngOnInit() {
  }

}
