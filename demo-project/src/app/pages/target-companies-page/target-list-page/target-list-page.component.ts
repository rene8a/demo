import { Component, OnInit } from '@angular/core';
import { ColumnDefinition } from 'projects/core/src/lib/custom-grid/interfaces/column-definition';
import { TargetCompany } from 'projects/core/src/lib/interfaces/target-company';
import { ButtonType } from 'projects/core/src/lib/enums/button-type.enum';
import { Router } from '@angular/router';
import { TargetCompanyService } from 'src/app/services/target-company.service';

@Component({
  selector: 'app-target-list-page',
  templateUrl: './target-list-page.component.html',
  styleUrls: ['./target-list-page.component.css']
})
export class TargetListPageComponent implements OnInit {
  deleteEnabled: boolean;
  editEnabled: boolean;
  dataColumns: ColumnDefinition[] = [
    { columnDef: 'id',    header: 'Id',   cell: (element: TargetCompany) => `${element.id}`},
    { columnDef: 'name',    header: 'Name',   cell: (element: TargetCompany) => `${element.name}`},
    { columnDef: 'address',     header: 'Address', cell: (element: TargetCompany) => `${element.address}`   },
    { columnDef: 'phone',   header: 'Phone', cell: (element: TargetCompany) => `${element.phone}`}
  ];

  data: TargetCompany[];
  deleteButton = ButtonType.warning;
  iconButton = ButtonType.icon;
  selectedItems = [];
  selectedIds = [];
  loading = false;

  constructor(private router: Router, private targetCompanyService: TargetCompanyService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.targetCompanyService.getAllTargetCompanies().subscribe(x => {
      this.loading = false;
      this.data = [...x];
    });
  }

  onSelect(event: any[]) {
    this.deleteEnabled = event.length > 0;
    this.editEnabled = event.length === 1;
    this.selectedItems = event;
    this.selectedIds = event.map(x => x.id as number);
  }

  onViewClick() {
    this.router.navigate(['/target-companies/' + this.selectedItems[0].id + '/view']);
  }

  onEditClick() {
    this.router.navigate(['/target-companies/' + this.selectedItems[0].id]);
  }

  onCreateClick() {
    this.router.navigate(['/target-companies/new']);
  }

  onDeleteClick() {
    this.targetCompanyService.deleteTargetCompanyByIds(this.selectedIds).subscribe(sucess => {
      window.location.reload();
    });
  }

}
