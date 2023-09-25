import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) {
    }

    base_url = `${environment.apiUrl}`;

    getEmployee(page: number, size: number, category: string, search: string, sort: string) {
        return this.http.get(this.base_url + '/employees/', {
            params: {
                page: page,
                size: size,
                category: category,
                search: search,
                sort: sort
            }
        })
    }

    findEmployee(id: number) {
        return this.http.get(this.base_url + '/employees/' + id)
    }
}
