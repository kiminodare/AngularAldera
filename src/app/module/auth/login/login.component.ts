import {Component} from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    submmited: boolean = false

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {
    }

    formControl: any = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    onSubmit() {
        this.submmited = true;
        if (this.formControl.valid) {
            this.router.navigate(['/employee'])
            localStorage.setItem('users', 'true')
        }
    }

    protected readonly console = console;
}
