import { Component, OnInit } from '@angular/core';
import { CocheService } from '../../services/coche.service';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [CocheService]
})
export class CochesComponent implements OnInit {
  public coches: Array<Coche>;

  constructor(private _service: CocheService) { }

  ngOnInit(): void {
    this._service.getCoches().subscribe(response => {
      console.log(response);
      this.coches = response;
    }, error => {
      console.log("Error en la petición");
    });
  }

}
