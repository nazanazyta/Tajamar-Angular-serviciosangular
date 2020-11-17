import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from './components/personas/personas.component';
import { CochesComponent } from './components/coches/coches.component';
import { FormsModule } from '@angular/forms';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadoService } from './services/empleado.service';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { routing, appRoutingProvider } from './app.routing';
import { TablaEmpleadosComponent } from './components/tablaempleados/tablaempleados.component';
import { DetallesEmpleadoComponent } from './components/detallesempleado/detallesempleado.component';
import { EmpleadoRoutingService } from './services/empleadorouting.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PersonasComponent,
    CochesComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    TablaEmpleadosComponent,
    DetallesEmpleadoComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
    , FormsModule
    , routing
  ],
  providers: [
    EmpleadoService
    , EmpleadoRoutingService
    , appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
