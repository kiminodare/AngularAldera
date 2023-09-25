import {IEmployee} from "../../../../model/employee.model";
import {
  EMPLOYEEMOCK_FETCH_SUCCESS,
  EMPLOYEEMOCK_UPDATE_SUCCESS,
  EMPLOYEEMOCK_CREATED_SUCCESS,
  EmployeeMockActions,
} from "../../actions/employeeMock/employeeMock.action";


export interface State {
  employee: IEmployee[];
  error: string;
  isLoading: boolean;
}

export const initialState = {
  employee: [],
  totalPage : null,
  currentPage: null,
  pageSize: null,
  totalElements: null,
  error: null,
  isLoading: false,
}

export function EmployeeMockReducer(state = initialState, action: EmployeeMockActions) {
  switch (action.type) {
    case EMPLOYEEMOCK_FETCH_SUCCESS:
      return {
        ...state,
        employee: [...action.payload],
        totalPage: action.totalPages,
        currentPage: action.currentPage,
        pageSize : action.pageSize,
        totalElements: action.totalElements,
        isLoading: false,
        error: null,
      }
    case EMPLOYEEMOCK_CREATED_SUCCESS:
      return {
        ...state,
        employee: [...state.employee, action.payload],
        isLoading: false,
        error: null,
      }
    default:
      return {...state};
  }
}
