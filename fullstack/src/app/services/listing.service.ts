import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { IRest } from '../model/rest.model';
import { environment } from 'src/environments/environment';

@Injectable()

export class ListingService{
    constructor(private http:HttpClient){}

   

    getWrtM(mealId:Number): Observable<IRest[]>{
        const Headers = new HttpHeaders({
            'Content-Type':'application/json'
        })
        return this.http.get<IRest[]>(`${environment.apiUrl}/restaurant?mealtype_id=${mealId}`,
        {headers:Headers})
    }


}