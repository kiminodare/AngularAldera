import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppState} from "../../state/app.state";
import {Store} from "@ngrx/store";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";
import {EmployeeFindStart} from "../../state/store/actions/employee/employee.action";

@Component({
    selector: 'app-detail-employee',
    templateUrl: './detail-employee.component.html',
    styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit, AfterContentInit{

    id: number = 0;
    employeeData: any = 'null';

    constructor(
        private route: ActivatedRoute,
        private store: Store<AppState>,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id']; // Membaca ID dari URL
        });

        this.store.select('employee').subscribe(
            (data: any) => {
                if (data?.employee.length > 0) {
                    this.employeeData = data.employee[0];
                }
            }
        )
    }

    ngAfterContentInit() {
        this.store.dispatch(new EmployeeFindStart(this.id));
    }

    backToEmployee() {
        this.router.navigate(['/employee'])
    }

}
