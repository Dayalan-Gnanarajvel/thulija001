import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EmpowerComponent } from './empower/empower.component';
import { Add2Component } from './add2/add2.component';
import { EditempowerComponent } from './editempower/editempower.component';
import { Customers } from './customer';

const routes: Routes = [
  {path:'', component:ProjectsComponent},
  {path:'view', component:ProjectsComponent},
  {path:'add', component:AddComponent},
  {path:'edit/:No', component:EditComponent},
  {path:'empower/', component:EmpowerComponent},
  {path:'add2', component:Add2Component},
  {path:'editempower/:No', component:EditempowerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }