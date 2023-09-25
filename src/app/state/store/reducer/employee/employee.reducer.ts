import {IEmployee} from "../../../../model/employee.model";
import {
    EMPLOYEE_CREATED_SUCCESS,
    EMPLOYEE_FETCH_FAILURE,
    EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_FIND_SUCCESS,
    EmployeeAction,
} from "../../actions/employee/employee.action";

export interface State {
    employee: IEmployee[];
    error: string;
    isLoading: boolean;
}

export const initialState = {
    employee: [],
    totalPage: null,
    currentPage: null,
    pageSize: null,
    totalElements: null,
    error: null,
    isLoading: false,
};

export function EmployeeReducer(state = initialState, action: EmployeeAction) {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            return {
                ...state,
                employee: [...action.payload],
                totalPage: action.totalPages,
                currentPage: action.currentPage,
                pageSize: action.pageSize,
                totalElements: action.totalElements,
                isLoading: false,
                error: null,
            }
        case EMPLOYEE_CREATED_SUCCESS:
            return {
                ...state,
                employee: [...state.employee, action.payload],
                isLoading: false,
                error: null,
            }
        case EMPLOYEE_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case EMPLOYEE_FIND_SUCCESS:
            return {
                ...state,
                employee: [...action.payload],
                isLoading: false,
            }
        default:
            return {...state};
    }
}
