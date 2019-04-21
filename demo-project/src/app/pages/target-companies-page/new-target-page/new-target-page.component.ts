import { Component, OnInit } from '@angular/core';
import { TargetCompanyService } from 'src/app/services/target-company.service';
import { TargetCompany } from 'projects/core/src/lib/interfaces/target-company';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonType } from 'projects/core/src/lib/enums/button-type.enum';

@Component({
  selector: 'app-new-target-page',
  templateUrl: './new-target-page.component.html',
  styleUrls: ['./new-target-page.component.css']
})
export class NewTargetPageComponent implements OnInit {
  backButton = ButtonType.icon;
  targetCompany: TargetCompany = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    city: '',
    state: '',
    postalCode: '',
    website: '',
    status: '',
    statusSummary: '',
    targetCompanyContacts: [
      { fullName: '', phone: '', email: '' },
      { fullName: '', phone: '', email: '' },
    ],
    targetCompanyFinancialPeriods: [
      { amount: 0, periodType: 'Year', periodValue: '2015' },
      { amount: 0, periodType: 'Year', periodValue: '2016' },
      { amount: 0, periodType: 'Year', periodValue: '2017' },
      { amount: 0, periodType: 'Year', periodValue: '2018' },
      { amount: 0, periodType: 'Year', periodValue: '2019' }
    ],
    financeSummary: ''
  };
  constructor(private targetCompanyService: TargetCompanyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSave(event: TargetCompany) {
    this.targetCompanyService.createTargetCompany(event).subscribe(sucess => {
      if (sucess) {
        this.router.navigate(['/target-companies/list']);
      } else {
        console.log('An Error ocurred while saving the info');
      }
    });
  }

  onGoBack() {
    this.router.navigate(['/target-companies/list']);
  }

}
