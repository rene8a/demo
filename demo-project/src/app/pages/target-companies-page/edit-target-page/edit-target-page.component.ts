import { Component, OnInit } from '@angular/core';
import { TargetCompanyService } from 'src/app/services/target-company.service';
import { TargetCompany } from 'projects/core/src/lib/interfaces/target-company';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonType } from 'projects/core/src/lib/enums/button-type.enum';

@Component({
  selector: 'app-edit-target-page',
  templateUrl: './edit-target-page.component.html',
  styleUrls: ['./edit-target-page.component.css']
})
export class EditTargetPageComponent implements OnInit {
  targetCompany: TargetCompany;
  targetCompanyId: number;
  backButton = ButtonType.icon;

  constructor(private targetCompanyService: TargetCompanyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.targetCompany = this.route.snapshot.data.targetCompany;
  }

  onSave(event: TargetCompany) {
    this.targetCompanyService.updateTargetCompany(event).subscribe(sucess => {
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
