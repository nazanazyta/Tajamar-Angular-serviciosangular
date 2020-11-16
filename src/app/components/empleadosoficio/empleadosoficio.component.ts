import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-empleados-oficio',
  templateUrl: './empleadosoficio.component.html'
})
export class EmpleadosoficioComponent implements OnInit {
  public oficios: Array<string>;
  public empleados: Array<Empleado>;
  public oficio: string;
  @ViewChild('cajaoficio') cajaofi: ElementRef;

  buscarEmpleados(){
    var oficio = this.cajaofi.nativeElement.value;
    this._service.buscarEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response;
      this.oficio = oficio;
    }, error => {
      console.log(error);
    });
  }

  constructor(private _service: EmpleadoService) {
    this.empleados = [];
  }

  ngOnInit(): void {
    this._service.buscarOficios().subscribe(response => {
      this.oficios = response;
    }, error => {
      console.log(error);
    });
  }

}
