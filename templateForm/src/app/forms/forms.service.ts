import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()


export class FormsService{
    private empUrl = "http://localhost:9122/employee";

    constructor(private http:HttpClient){}

    postEmp(employee:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.empUrl, employee)
    }
}