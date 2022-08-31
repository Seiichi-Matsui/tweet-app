import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { JwtHelperService } from "@auth0/angular-jwt";


const jwt = new JwtHelperService();

class DecodedToken {
    userId: string = ""
    username: string = ""
    exp: number = 0
}

@Injectable()
export class AuthService implements OnInit {

    private decodedToken: any
    constructor (private http: HttpClient) {
        // this.decodedToken = localStorage.getItem(JSON.parse(this.decodedToken)) || new DecodedToken
    }
    ngOnInit(): void {
        
    }

    register(userDate: string): Observable<any> {
        return this.http.post('/api/v1/user/register', userDate)
    }
    

    login(userDate: string): Observable<any> {
        return this.http.post('/api/v1/user/login', userDate).pipe(map(
          (username: any) => {
            console.log(username);
            
            // this.decodedToken = jwt.decodeToken(token)
            localStorage.setItem('username', username)
                return username
            },
        ))
    }
}