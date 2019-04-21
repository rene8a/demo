import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { TargetCompany } from '../../interfaces/target-company';
import { InfoComponent } from './info/info.component';
import { StatusComponent } from './status/status.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FinanceComponent } from './finance/finance.component';
import { ButtonType } from '../../enums/button-type.enum';

@Component({
  selector: 'lib-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  @Input() data: TargetCompany;
  targetCompany: TargetCompany;
  saveButton = ButtonType.normal;

  @ViewChild('targetInfo') targetInfo: InfoComponent;
  @ViewChild('targetStatus') targetStatus: StatusComponent;
  @ViewChild('targetContacts') targetContacts: ContactsComponent;
  @ViewChild('targetFinance') targetFinance: FinanceComponent;

  @Output() save = new EventEmitter<TargetCompany>();

  constructor() { }

  ngOnInit() {
    if (this.data !== null && this.data !== undefined) {
      this.targetCompany = this.data;
    }
  }

  onSave() {
    let targetCompany: TargetCompany;
    if (this.targetInfo.data.name) {
      targetCompany = {
        id: this.data.id === undefined ? null : this.data.id,
        name: this.targetInfo.data.name,
        address: this.targetInfo.data.address,
        phone: this.targetInfo.data.phone,
        city: this.targetInfo.data.city,
        state: this.targetInfo.data.state,
        postalCode: this.targetInfo.data.postalCode,
        website: this.targetInfo.data.website,
        status: this.targetStatus.data.status,
        statusSummary: this.targetStatus.data.statusSummary,
        targetCompanyContacts: this.targetContacts.data.targetCompanyContacts,
        targetCompanyFinancialPeriods: this.targetFinance.data.targetCompanyFinancialPeriods,
        financeSummary: this.targetFinance.data.financeSummary
      };
    } else {
      alert('Mandatory field: Company Info -> Name');
    }
    console.log(targetCompany);
    this.save.emit(targetCompany);
  }
}
