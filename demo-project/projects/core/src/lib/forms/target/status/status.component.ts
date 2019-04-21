import { Component, OnInit, Input } from '@angular/core';
import { TargetCompany } from '../../../interfaces/target-company';

@Component({
  selector: 'lib-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() data: TargetCompany;
  constructor() { }

  ngOnInit() {
  }

}
