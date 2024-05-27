import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";

export const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "**", pathMatch: "full", component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
