import { Injectable } from '@angular/core';
import employeeMock from "../../../mock/employee.mock";

@Injectable({
  providedIn: 'root'
})
export class EmployeeMockService {

  getEmployeeMock() {
    return {
      payload: employeeMock,
      pageable: {
        pageNumber: 0,
        pageSize: 10,
        totalElements: 100,
        totalPages: 10,
      }
    }
  }
}
