import {createEffect, Actions, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {
    EmployeeFetchStart,
    EMPLOYEE_FETCH_START,
    EmployeeFetchSuccess, EmployeeFetchFailure, EmployeeFindStart, EMPLOYEE_FIND_START, EmployeeFindSuccess,
} from "../store/actions/employee/employee.action";

import {catchError, map, switchMap} from 'rxjs/operators';
import {EmployeeService} from 'src/app/module/employee/services/employee.service';
import {IEmployee} from 'src/app/model/employee.model';
import {ResponseSuccessInterface} from "../../model/responseSuccess.model";
import {of} from "rxjs";

@Injectable()
export class EmployeeEffect {
    constructor(private actions$: Actions, private EmployeeService: EmployeeService) {
    }


    fetchEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType<EmployeeFetchStart>(EMPLOYEE_FETCH_START),
            switchMap((response) => {
                return this.EmployeeService.getEmployee(response.page, response.size, response.category, response.search, response.sort).pipe(
                    map((data: ResponseSuccessInterface<IEmployee[]>) => {
                        return new EmployeeFetchSuccess(data.payload, data.pageable.pageNumber, data.pageable.pageSize, data.pageable.totalElements, data.pageable.totalPages);
                    }),
                    catchError((error) => {
                        return of(new EmployeeFetchFailure(error));
                    })
                );
            })
        )
    )

    fetchEmployeeDetail$ = createEffect(() =>
        this.actions$.pipe(
            ofType<EmployeeFindStart>(EMPLOYEE_FIND_START),
            switchMap((response) => {
                return this.EmployeeService.findEmployee(response.id).pipe(
                    map((data: ResponseSuccessInterface<IEmployee[]>) => {
                        return new EmployeeFindSuccess(data.payload);
                    }),
                    catchError((error) => {
                        return of(new EmployeeFetchFailure(error));
                    })
                );
            })
        )
    )
}

