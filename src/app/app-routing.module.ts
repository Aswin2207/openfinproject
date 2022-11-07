import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATH } from './shared/constants/route-names.constant';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [ { path: ROUTE_PATH.MAIN, component: MainLayoutComponent },
  { path: "", redirectTo: "/" + ROUTE_PATH.MAIN, pathMatch: "full" },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
