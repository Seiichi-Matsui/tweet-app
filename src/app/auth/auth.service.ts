import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { JwtHelperService } from "@auth0/angular-jwt";
import * as moment from 'moment'


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
        this.decodedToken = new DecodedToken() || localStorage.getItem(JSON.parse(this.decodedToken))
      }
    ngOnInit(): void {
        
    }

    isAuthenticated() {
        return moment().isBefore(moment.unix(this.decodedToken.exp))
    }

    register(userDate: string): Observable<any> {
        return this.http.post('/api/v1/user/register', userDate)
    }
    

    login(userDate: string): Observable<any> {
        return this.http.post('/api/v1/user/login', userDate).pipe(map(
          (username: any) => {
            
            // this.decodedToken = jwt.decodeToken(token)
            localStorage.setItem('username', username[0])

            this.decodedToken= jwt.decodeToken(username[1])
            localStorage.setItem('app-auth', username[1])
            localStorage.setItem('app-meta', JSON.stringify(this.decodedToken))

            return username
            }
        ))
    }

    logout() {
        localStorage.removeItem('app-auth')
        localStorage.removeItem('app-meta')
        localStorage.removeItem('username')
        this.decodedToken = new DecodedToken()
    }
}