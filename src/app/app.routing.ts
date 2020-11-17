import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaEmpleadosComponent } from './components/tablaempleados/tablaempleados.component';
import { DetallesEmpleadoComponent } from './components/detallesempleado/detallesempleado.component';

const appRoutes: Routes = [
    { path: "empleados", component: TablaEmpleadosComponent },
    { path: "detallesempleado/:empno", component: DetallesEmpleadoComponent }
];

export const appRoutingProvider: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);