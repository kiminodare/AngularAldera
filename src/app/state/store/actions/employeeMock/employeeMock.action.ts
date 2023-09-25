import {Action} from "@ngrx/store";
import {IEmployee} from "../../../../model/employee.model";
import {IFailure} from "../../../../model/failure.model";

export const EMPLOYEEMOCK_FETCH_START = "[EmployeeModel] Start Fetch EmployeeModel";
export const EMPLOYEEMOCK_FETCH_SUCCESS = "[EmployeeModel] Success Fetch EmployeeModel";
export const EMPLOYEEMOCK_FETCH_FAILURE = "[EmployeeModel] Failure Fetch EmployeeModel";

export const EMPLOYEEMOCK_CREATED_START = "[EmployeeModel] Start Create EmployeeModel";
export const EMPLOYEEMOCK_CREATED_SUCCESS = "[EmployeeModel] Success Create EmployeeModel";
export const EMPLOYEEMOCK_CREATED_FAILURE = "[EmployeeModel] Failure Create EmployeeModel";

export const EMPLOYEEMOCK_UPDATE_START = "[EmployeeModel] Start Update EmployeeModel";
export const EMPLOYEEMOCK_UPDATE_SUCCESS = "[EmployeeModel] Success Update EmployeeModel";
export const EMPLOYEEMOCK_UPDATE_FAILURE = "[EmployeeModel] Failure Update EmployeeModel";

export const EMPLOYEEMOCK_GET = "[EmployeeModel] GET EmployeeModel";
export const EMPLOYEEMOCK_DELETE = "[EmployeeModel] Deleted EmployeeModel";

export class EmployeeMockFetchStart implements Action {
  readonly type = EMPLOYEEMOCK_FETCH_START;

  constructor(public page: number, public size: number) {
  }
}

export class EmployeeMockFetchSuccess implements Action {
  readonly type = EMPLOYEEMOCK_FETCH_SUCCESS;

  constructor(public payload: IEmployee[], public currentPage: number, public pageSize: number, public totalElements: number, public totalPages: number) {
  }
}

export class EmployeeMockFetchFailure implements Action {
  readonly type = EMPLOYEEMOCK_FETCH_FAILURE;

  constructor(public payload: IFailure) {
  }
}

export class EmployeeMockCreateStart implements Action {
  readonly type = EMPLOYEEMOCK_CREATED_START;

  constructor(public payload: IEmployee) {
  }
}

export class EmployeeMockCreateSuccess implements Action {
  readonly type = EMPLOYEEMOCK_CREATED_SUCCESS;

  constructor(public payload: IEmployee) {
  }
}

export class EmployeeMockCreateFailure implements Action {
  readonly type = EMPLOYEEMOCK_CREATED_FAILURE;

  constructor(public payload: IFailure) {
  }
}

export class EmployeeMockUpdateStart implements Action {
  readonly type = EMPLOYEEMOCK_UPDATE_START;

  constructor(public payload: IEmployee) {
  }
}

export class EmployeeMockUpdateSuccess implements Action {
  readonly type = EMPLOYEEMOCK_UPDATE_SUCCESS;

  constructor(public payload: IEmployee) {
  }
}

export class EmployeeMockUpdateFailure implements Action {
  readonly type = EMPLOYEEMOCK_UPDATE_FAILURE;

  constructor(public payload: IFailure) {
  }
}

export class EmployeeMockGet implements Action {
  readonly type = EMPLOYEEMOCK_GET;

  constructor(public payload: IEmployee[]) {
  }
}

export class EmployeeMockDelete implements Action {
  readonly type = EMPLOYEEMOCK_DELETE;

  constructor(public payload: IEmployee) {
  }
}

export type EmployeeMockActions =
  | EmployeeMockFetchStart
  | EmployeeMockFetchSuccess
  | EmployeeMockFetchFailure
  | EmployeeMockCreateStart
  | EmployeeMockCreateSuccess
  | EmployeeMockCreateFailure
  | EmployeeMockUpdateStart
  | EmployeeMockUpdateSuccess
  | EmployeeMockUpdateFailure
  | EmployeeMockGet
  | EmployeeMockDelete;
