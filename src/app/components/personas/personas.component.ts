import { Component, OnInit } from '@angular/core';
import { PersonaService } from './../../services/persona.service';
import { Persona } from './../../models/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaService]
})
export class PersonasComponent implements OnInit {
  public personas: Array<Persona>;

  constructor(private _service: PersonaService) { }

  ngOnInit(): void {
    // this._service.mostrarMensaje();
    this._service.getPersonas().subscribe(response => {
      console.log(response);
      this.personas = response;
    }, error => {
      console.log("Error en la petición");
    });
  }

}
