import {AfterContentInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AppState} from "../../state/app.state";
import {Store} from '@ngrx/store';
import {map} from "rxjs/operators";
import {EmployeeFetchStart} from "../../state/store/actions/employee/employee.action";
import {Subject} from "rxjs";
import {MatSort, SortDirection} from "@angular/material/sort";
import * as sweetalert2 from "sweetalert2";
import {Router} from "@angular/router";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})

export class EmployeeComponent implements OnInit, AfterContentInit {


    employeeData: any;
    private ngUnsubscribe = new Subject<void>();
    displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName', 'email', 'action'];
    loading = true;
    sortDirection: string = 'asc';
    savedFilterValues: any;

    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private Store: Store<AppState>,
        private router: Router
    ) {
    }

    employeeOptions = {
        pageSize: 5,
        pageIndex: 0,
        category: '',
        search: '',
        sort: '',
    }
    totalPage: number = 0;
    currentPage: number = 0;

    ngOnInit(): void {
        this.Store.select('employee').pipe(
            map((data: any) => {
                if (data?.employee.length > 0) {
                    this.employeeData = data.employee;
                    this.totalPage = data.totalElements;
                    this.currentPage = data.currentPage;
                    this.employeeOptions.pageSize = data.pageSize;
                    if (this.employeeData.length > 0) {
                        this.loading = false;
                    }
                } else {
                    this.loading = true;
                }
            })
        ).subscribe()
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngAfterContentInit() {
        this.savedFilterValues = localStorage.getItem('filterValue')
        if(this.savedFilterValues) {
            this.Store.dispatch(new EmployeeFetchStart(this.employeeOptions.pageIndex, this.employeeOptions.pageSize, this.employeeOptions.category, this.savedFilterValues, this.employeeOptions.sort))
        } else {
            this.Store.dispatch(new EmployeeFetchStart(this.employeeOptions.pageIndex, this.employeeOptions.pageSize, this.employeeOptions.category, this.employeeOptions.search, this.employeeOptions.sort))
        }
    }

    onPageChange(event: any) {
        this.Store.dispatch(new EmployeeFetchStart(event.pageIndex, event.pageSize, this.employeeOptions.category, this.employeeOptions.search, this.employeeOptions.sort))
    }

    sortData(column: string, direction: SortDirection) {
        if(direction === 'asc') {
            this.sortDirection = 'asc'
        } else if (direction === 'desc') {
            this.sortDirection = 'desc'
        } else {
            this.sortDirection = null
        }

        this.Store.dispatch(new EmployeeFetchStart(this.employeeOptions.pageIndex, this.employeeOptions.pageSize, this.employeeOptions.category, this.employeeOptions.search, `${column}:${this.sortDirection}`))
        console.log(`Sorting pada kolom ${column} dengan arah ${direction}`);
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        localStorage.setItem('filterValue', filterValue)
        this.Store.dispatch(new EmployeeFetchStart(this.employeeOptions.pageIndex, this.employeeOptions.pageSize, this.employeeOptions.category, filterValue, this.employeeOptions.sort))
    }

    clearFilter() {
        localStorage.removeItem('filterValue')
        this.savedFilterValues = null
        this.Store.dispatch(new EmployeeFetchStart(this.employeeOptions.pageIndex, this.employeeOptions.pageSize, this.employeeOptions.category, '', this.employeeOptions.sort))
    }

    editEmployee(id: number) {
        console.log(id)
    }

    deleteEmployee(id: number) {
        sweetalert2.default.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result: any) => {
            sweetalert2.default.fire(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
            )
        })
    }

    detailEmployee(id: number) {
        this.router.navigate(['/employee', id])
    }
}
