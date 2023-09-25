import {Component} from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormBuilder,
    FormControl,
    ValidationErrors,
    ValidatorFn,
    Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {delay, Observable, of, startWith} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

    pageTitle: string = 'Add Employee';
    submmited: boolean = false
    Group: string[] = ['Dev', 'HR', 'Admin', 'DevOps', 'Infra', 'DBA', 'IT Support', 'Super Admin', 'QA', 'UI/UX'];
    filteredOptions: Observable<string[]>;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {
    }

    dateOfBirthValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
            const selectedDate = control.value;
            const currentDate = new Date();
            if (selectedDate > currentDate) {
                return of({ 'futureDate': true }).pipe(delay(1000)); // Misalnya, tambahkan delay untuk mensimulasikan validasi asinkron.
            }
            return of(null);
        };
    }

    dateOfDescriptionValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
            const selectedDate = control.value;
            const currentDate = new Date();
            if (selectedDate > currentDate) {
                return of({ 'futureDate': true }).pipe(delay(1000)); // Misalnya, tambahkan delay untuk mensimulasikan validasi asinkron.
            }
            return of(null);
        };
    }

    formControl: any = this.formBuilder.group({
        userName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        birthDate: ['', Validators.required, this.dateOfBirthValidator()],
        basicSalary: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        status: ['', Validators.required],
        group: ['', Validators.required],
        description: ['', Validators.required, this.dateOfDescriptionValidator()]
    })

    onSubmit() {
        this.submmited = true;
        if(this.formControl.valid){
            this.router.navigate(['/employee'])
        }
    }

    ngOnInit(): void {
        this.filteredOptions = this.formControl.get('group')!.valueChanges.pipe(
            startWith(''),
            map(value => this._filterGroup(value))
        );
    }

    private _filterGroup(value: any): string[] {
        const filterValue = value.toLowerCase();
        return this.Group.filter(option => option.toLowerCase().includes(filterValue));
    }
}
