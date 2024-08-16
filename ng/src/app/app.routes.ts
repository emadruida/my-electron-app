import { Routes } from "@angular/router";
import { ListadoComponent } from "./listado/listado.component";
import { DetalleComponent } from "./detalle/detalle.component";

export const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'detalle/:id', component: DetalleComponent },
];
