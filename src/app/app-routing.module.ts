import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./module/auth/login/login.component";
import {EmployeeComponent} from "./module/employee/employee.component";
import {EmployeeMockComponent} from "./module/employee-mock/employee-mock.component";
import {AddEmployeeComponent} from "./module/add-employee/add-employee.component";
import {DetailEmployeeComponent} from "./module/detail-employee/detail-employee.component";
import {AuthGuard} from "./helper/authGuard";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'employee',
        canActivate: [AuthGuard],
        component: EmployeeComponent,
        data: {
            title: 'Employee'
        }
    },
    {
        path: 'employeeMock',
        canActivate: [AuthGuard],
        component: EmployeeMockComponent,
        data: {
            title: 'Employee Mock'
        }
    },
    {
        path: 'addEmployee',
        canActivate: [AuthGuard],
        component: AddEmployeeComponent,
        data: {
            title: 'Add Employee'
        }
    },
    {
        path: 'employee/:id',
        canActivate: [AuthGuard],
        component: DetailEmployeeComponent,
        data: {
            title: 'Detail Employee {{id}}'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
