import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewWorkspaceFormComponent } from './new-workspace-form/new-workspace-form.component';
import { NewWorkspaceFormModeldrivenComponent } from './new-workspace-form-modeldriven/new-workspace-form-modeldriven.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new-workspace-form', component: NewWorkspaceFormComponent },
  { path: 'new-workspace-form-modeldriven', component: NewWorkspaceFormModeldrivenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
