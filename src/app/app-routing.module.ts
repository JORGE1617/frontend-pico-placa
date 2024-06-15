import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPicoPlacaComponent } from './consulta-pico-placa/consulta-pico-placa.component'; // Importa tu componente

const routes: Routes = [
  { path: 'consulta-pico-placa', component: ConsultaPicoPlacaComponent }, // Asegúrate de que la ruta apunte correctamente al componente
  // Otras rutas de tu aplicación
  { path: '', redirectTo: '/consulta-pico-placa', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
