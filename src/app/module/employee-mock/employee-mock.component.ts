import {Component, ViewChild} from '@angular/core';
import {IEmployee} from "../../model/employee.model";
import {MatTableDataSource} from '@angular/material/table';
import employeeMock from "../../mock/employee.mock";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-employee-mock',
  templateUrl: './employee-mock.component.html',
  styleUrls: ['./employee-mock.component.scss']
})
export class EmployeeMockComponent {

  displayedColumns: string[] = ['No', 'Username', 'firstName', 'lastName', 'Email', 'birthDate', 'basicSalary', 'Status', 'Group', 'Description'];
  dataSource: MatTableDataSource<IEmployee>;
  currentPage = 0;
  pageSize = 10;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<IEmployee>(employeeMock);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
