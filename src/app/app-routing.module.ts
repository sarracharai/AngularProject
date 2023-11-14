import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { RechercheParVolComponent } from './recherche-par-vol/recherche-par-vol.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
{path:"avions", component : AvionsComponent},
{path:"add-avion", component : AddAvionComponent},
{path: "updateAvion/:id", component: UpdateAvionComponent},
{path: "rechercheParVol", component : RechercheParVolComponent},
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "", redirectTo: "avions", pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
