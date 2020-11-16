import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-empleados-salario',
  templateUrl: './empleadossalario.component.html'
})
export class EmpleadossalarioComponent implements OnInit {
  public empleados: Array<Empleado>;
  @ViewChild("cajasalario") cajasal: ElementRef;

  buscarEmpleados() {
    console.log("buscando empleados");
    var salario = this.cajasal.nativeElement.value;
    this._service.buscarEmpleadosSalario(salario).subscribe(response => {
      this.empleados = response;
    }, error => {
      console.log(error);
    });
  }

  constructor(private _service: EmpleadoService) {
    this.empleados = [];
  }

  ngOnInit(): void {
  }

}
