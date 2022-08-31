import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()
export class SharDateService implements OnInit{
    user: any
    constructor(
        private http: HttpClient
        ) {
        }

    ngOnInit(): void {
      }


    getComent(): Observable<any> {
        return this.http.get('/api/v1/coment')
    }

    // getUser(): Observable<any> {
    //     return this.http.get('/api/v1/user/register')
    // }


    addComent(coments: string): Observable<any> {
        // const userObsevable = this.getUser()
        // userObsevable.subscribe(
        // (date) => {
        //     this.user = date
        //     console.log(date);
        //     console.log('いけーーーー');
            
        // },
        // (err) => {},
        // () => {}
        // )
        console.log(coments);
        
        const name = localStorage.getItem('username')
        const coment = {"userName": name,"userComent": coments}
        console.log(coment);
        
        return this.http.post('/api/v1/coment', coment)
    }

    
}