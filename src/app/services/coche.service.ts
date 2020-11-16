import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coche } from '../models/coche';
import { Global } from './global';

@Injectable()
export class CocheService{
    public url: string;

    constructor(private _http: HttpClient){
        this.url = Global.urlcoches;
    }

    getCoches(): Observable<any>{
        var request = "webresources/coches";
        return this._http.get(this.url + request);
    }
}