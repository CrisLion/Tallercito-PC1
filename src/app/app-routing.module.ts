import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatTableComponent } from './cats/components/cat-table/cat-table.component';
const routes: Routes = [
  {path: "cat", component: CatTableComponent},
  {path: "", redirectTo:"cat", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
