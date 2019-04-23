import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ColumnDefinition } from './interfaces/column-definition';
import { TargetCompany } from '../interfaces/target-company';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'lib-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  mattabledataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: Array<string>;
  selection = new SelectionModel<any>(true, []);

  @Input() loading: boolean;
  @Input() displaycolumndefs: ColumnDefinition[];
  @Input('data') set data(value: TargetCompany[]) {
    this.mattabledataSource.data = value;
  }
  @Output() selectedItems: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['select', ...this.displaycolumndefs.map(c => c.columnDef)];
  }

  onSelect(row: any) {
    if (!this.selection.isSelected(row)) {
      this.selection.select(row);
    } else {
      this.selection.deselect(row);
    }
    this.selectedItems.emit(this.selection.selected);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.mattabledataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.mattabledataSource.data.forEach(row => this.selection.select(row));
    this.selectedItems.emit(this.selection.selected);
  }

}
