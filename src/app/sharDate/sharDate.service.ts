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

    addComent(coments: string): Observable<any> {
        const now:any = new Date


        var Year = now.getFullYear();
        var Month = now.getMonth()+1;
        var Day = now.getDate();
        var Hour = now.getHours();
        var Min = now.getMinutes();

        const time = (Year + "." + Month + "." + Day + " " + Hour + ":" + Min)
        console.log(time);
        

        const name = localStorage.getItem('username')
        const coment = {"userName": name,"userComent": coments, "timeData": time}
        
        return this.http.post('/api/v1/coment', coment)
    }

    comentDelate($event: any): Observable<any> {
        const coment = $event
        
        return this.http.delete('/api/v1/coment/'+ coment)
    }

    
}