import {Action} from "@ngrx/store";
import {IEmployee} from "../../../../model/employee.model";
import {IFailure} from "../../../../model/failure.model";

export const EMPLOYEE_FETCH_START = "[EmployeeModel] Start Fetch EmployeeModel";
export const EMPLOYEE_FETCH_SUCCESS = "[EmployeeModel] Success Fetch EmployeeModel";
export const EMPLOYEE_FETCH_FAILURE = "[EmployeeModel] Failure Fetch EmployeeModel";


export const EMPLOYEE_CREATED_START = "[EmployeeModel] Start Create EmployeeModel";
export const EMPLOYEE_CREATED_SUCCESS = "[EmployeeModel] Success Create EmployeeModel";
export const EMPLOYEE_CREATED_FAILURE = "[EmployeeModel] Failure Create EmployeeModel";


export const EMPLOYEE_UPDATE_START = "[EmployeeModel] Start Update EmployeeModel";
export const EMPLOYEE_UPDATE_SUCCESS = "[EmployeeModel] Success Update EmployeeModel";
export const EMPLOYEE_UPDATE_FAILURE = "[EmployeeModel] Failure Update EmployeeModel";

export const EMPLOYEE_FIND_START = "[EmployeeModel] Find EmployeeModel";

export const EMPLOYEE_FIND_SUCCESS = "[EmployeeModel] Success Find EmployeeModel";

export const EMPLOYEE_FIND_FAILURE = "[EmployeeModel] Failure Find EmployeeModel";

export const EMPLOYEE_GET = "[EmployeeModel] GET EmployeeModel";
export const EMPLOYEE_DELETE = "[EmployeeModel] Deleted EmployeeModel";


export class EmployeeFetchStart implements Action {
    readonly type = EMPLOYEE_FETCH_START;

    constructor(public page: number, public size: number, public category: string, public search: string, public sort: string) {
    }
}

export class EmployeeFetchSuccess implements Action {
    readonly type = EMPLOYEE_FETCH_SUCCESS;

    constructor(public payload: IEmployee[], public currentPage: number, public pageSize: number, public totalElements: number, public totalPages: number) {
    }
}

export class EmployeeFetchFailure implements Action {
    readonly type = EMPLOYEE_FETCH_FAILURE;

    constructor(public payload: IFailure) {
    }
}

export class EmployeeCreateStart implements Action {
    readonly type = EMPLOYEE_CREATED_START;

    constructor(public payload: IEmployee) {
    }
}

export class EmployeeCreateSuccess implements Action {
    readonly type = EMPLOYEE_CREATED_SUCCESS;

    constructor(public payload: IEmployee) {
    }
}

export class EmployeeCreateFailure implements Action {
    readonly type = EMPLOYEE_CREATED_FAILURE;

    constructor(public payload: IFailure) {
    }
}

export class EmployeeUpdateStart implements Action {
    readonly type = EMPLOYEE_UPDATE_START;

    constructor(public payload: IEmployee) {
    }
}

export class EmployeeUpdateSuccess implements Action {
    readonly type = EMPLOYEE_UPDATE_SUCCESS;

    constructor(public payload: IEmployee) {
    }
}

export class EmployeeUpdateFailure implements Action {
    readonly type = EMPLOYEE_UPDATE_FAILURE;

    constructor(public payload: IFailure) {
    }
}

export class EmployeeFindStart implements Action {
    readonly type = EMPLOYEE_FIND_START;

    constructor(public id: number) {
    }
}

export class EmployeeFindSuccess implements Action {
    readonly type = EMPLOYEE_FIND_SUCCESS;

    constructor(public payload: IEmployee[]) {
    }
}

export class EmployeeFindFailure implements Action {
    readonly type = EMPLOYEE_FIND_FAILURE;

    constructor(public payload: IFailure) {
    }
}

export class EmployeeGet implements Action {
    readonly type = EMPLOYEE_GET;

    constructor(public payload: IEmployee[]) {
    }
}

export class EmployeeDelete implements Action {
    readonly type = EMPLOYEE_DELETE;

    constructor(public payload: IEmployee) {
    }
}

export type EmployeeAction =
    | EmployeeFetchStart
    | EmployeeFetchSuccess
    | EmployeeFetchFailure
    | EmployeeCreateStart
    | EmployeeCreateSuccess
    | EmployeeCreateFailure
    | EmployeeUpdateStart
    | EmployeeUpdateSuccess
    | EmployeeUpdateFailure
    | EmployeeFindStart
    | EmployeeFindSuccess
    | EmployeeFindFailure
    | EmployeeGet
    | EmployeeDelete;
