import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from "./global";

@Injectable()
export class EmpleadoRoutingService {
    private url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urlelmpleados;
    }

    getEmpleados() : Observable<any> {
        var request = "api/empleados";
        return this._http.get(this.url + request);
    }

    buscarEmpleado(idempleado: string): Observable<any> {
        var request = "api/empleados/" + idempleado;
        return this._http.get(this.url + request);
    }
}