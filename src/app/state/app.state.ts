import { ActionReducerMap } from '@ngrx/store';

import * as EmployeeReducer from './store/reducer/employee/employee.reducer';

export interface AppState {
  employee: EmployeeReducer.State;
}

export const actionReducerMap: ActionReducerMap<AppState> = {
  employee: EmployeeReducer.EmployeeReducer,
}
