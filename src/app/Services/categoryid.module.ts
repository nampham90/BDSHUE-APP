import { Injectable } from "@angular/core";

import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable()
export class CategoryIdService{
    constructor(private http: HttpClient){}
    getCategoryId(id){
        let options={
            headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
        }
        return this.http.post("http://192.168.1.26:3000/api/cate/"+id,options);
    }
    
}