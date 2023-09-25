import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  EmployeeMockFetchStart,
  EMPLOYEEMOCK_FETCH_START,
  EmployeeMockFetchSuccess,
} from "../store/actions/employeeMock/employeeMock.action";

import { map, switchMap } from 'rxjs/operators';
import { EmployeeMockService } from 'src/app/module/employee-mock/services/employee-mock.service';
import { IEmployee } from 'src/app/model/employee.model';
import {ResponseSuccessInterface} from "../../model/responseSuccess.model";

@Injectable()
export class EmployeeMockEffect {
  constructor(private actions$: Actions, private EmployeeMockService: EmployeeMockService) { }
}
