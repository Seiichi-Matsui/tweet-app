import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class SharDateService {

    constructor(private http: HttpClient) {}

    getComent(): Observable<any> {
        return this.http.get('/api/v1/coment')
    }
}