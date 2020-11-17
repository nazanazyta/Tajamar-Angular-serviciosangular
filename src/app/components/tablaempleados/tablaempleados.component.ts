import { Component, OnInit } from '@angular/core';
import { EmpleadoRoutingService } from './../../services/empleadorouting.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tablaempleados.component.html'
})
export class TablaEmpleadosComponent implements OnInit {
  public empleados: Array<Empleado>;

  constructor(private _service: EmpleadoRoutingService) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response;
    }, error => {
      console.log(error);
    });
  }

}
