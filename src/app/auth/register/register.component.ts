import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    errors: any = []
    test : Date = new Date()
    focus: any;
    focus1: any;
    constructor(
        private authService: AuthService,
        private router: Router
        ) { }

    ngOnInit() {}

    register(registerForm: any) {
        this.authService.register(registerForm.value).subscribe(
            (result) => {
                console.log('success!');
                this.router.navigate(['/login'])
            },
            (err: HttpErrorResponse) => {
                this.errors = err.error.errors
            }
        )
    }
}
