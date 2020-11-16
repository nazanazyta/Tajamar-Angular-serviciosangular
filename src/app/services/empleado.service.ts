import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class EmpleadoService{
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urlelmpleados;
    }

    buscarEmpleadosSalario(salario: string): Observable<any> {
        var request = "api/empleados/empleadossalario/" + salario;
        return this._http.get(this.url + request);
    }

    buscarOficios(): Observable<any> {
        var request = "api/empleados/oficios";
        return this._http.get(this.url + request);
    }

    buscarEmpleadosOficio(oficio: string): Observable<any> {
        var request="api/empleados/empleadosoficio/" + oficio;
        return this._http.get(this.url + request);
    }
}