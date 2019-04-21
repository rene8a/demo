import { Component, OnInit } from '@angular/core';
import { TargetCompanyService } from 'src/app/services/target-company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TargetCompany } from 'projects/core/src/lib/interfaces/target-company';
import { ButtonType } from 'projects/core/src/lib/enums/button-type.enum';
import { BarData } from 'projects/core/src/lib/custom-chart/bar-chart/interfaces/bar-data';

@Component({
  selector: 'app-view-target-page',
  templateUrl: './view-target-page.component.html',
  styleUrls: ['./view-target-page.component.css']
})
export class ViewTargetPageComponent implements OnInit {
  targetCompany: TargetCompany;
  targetCompanyId: number;
  backButton = ButtonType.icon;
  barChartData: BarData[];
  barChartTitle: string;

  constructor(private targetCompanyService: TargetCompanyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.targetCompany = this.route.snapshot.data.targetCompany;
    this.barChartData = this.route.snapshot.data.targetCompany.targetCompanyFinancialPeriods.map(financialPerid =>
      ({ xValue: financialPerid.periodValue, yFrequency: financialPerid.amount }) as BarData
    );
  }

  onGoBack() {
    this.router.navigate(['/target-companies/list']);
  }

}
