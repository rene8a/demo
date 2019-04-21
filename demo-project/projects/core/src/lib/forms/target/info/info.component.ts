import { Component, OnInit, Input } from '@angular/core';
import { TargetCompany } from '../../../interfaces/target-company';

@Component({
  selector: 'lib-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() data: TargetCompany;
  constructor() { }

  ngOnInit() {
  }

}
