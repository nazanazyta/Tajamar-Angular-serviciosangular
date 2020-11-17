import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmpleadoRoutingService } from './../../services/empleadorouting.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detallesempleado.component.html'
})
export class DetallesEmpleadoComponent implements OnInit {
  public empleado: Empleado;

  constructor(
    private _service: EmpleadoRoutingService,
    private _activeRoute: ActivatedRoute
  ) { }

  buscarEmpleado(empno: string) {
    this._service.buscarEmpleado(empno).subscribe(response => {
      this.empleado = response;
      console.log(this.empleado);
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params ) => {
      var idEmp = params.empno;
      this.buscarEmpleado(idEmp);
    });
  }

}
