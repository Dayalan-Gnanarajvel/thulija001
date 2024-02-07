import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms'
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WorkspaceComponent } from './workspace/workspace.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProjectsComponent } from './projects/projects.component';
import { AddComponent } from './add/add.component';
import { Add2Component } from './add2/add2.component';
import { Add3Component } from './add3/add3.component';
import { EditComponent } from './edit/edit.component';
import { EmpowerComponent } from './empower/empower.component';
import { EditempowerComponent } from './editempower/editempower.component';
import { SchemaComponent } from './schema/schema.component';
import { EditschemaComponent } from './editschema/editschema.component';
import { CustomersService } from './customers.service';
import { AppRoutingModule } from './app-routing.module';

export const routes:Routes =[
];
@NgModule({

  declarations: [
    AppComponent,
    WorkspaceComponent,
    ProjectsComponent,
    AddComponent,
    Add2Component,
    Add3Component,
    EditComponent,
    EmpowerComponent,
    EditempowerComponent,
    SchemaComponent,
    EditschemaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
   
    HttpClientModule,
    
    RouterModule.forRoot(routes)
   
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
