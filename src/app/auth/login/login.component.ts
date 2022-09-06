import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errors: any = []
    test : Date = new Date();
    focus: any;
    focus1: any;
    constructor(
        private authService: AuthService,
        private router: Router
        ) {
     }


    ngOnInit() {}


    login(loginForm: any) {
        this.authService.login(loginForm.value).subscribe(
            (username) => {
                this.router.navigate([''])

                
            },
            (err: HttpErrorResponse) => {
                this.errors = err.error.errors
            }
        )
    }

}
