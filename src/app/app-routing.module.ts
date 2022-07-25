import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWorkspaceFormComponent } from './new-workspace-form/new-workspace-form.component';

const routes: Routes = [
  { path: '**', component: NewWorkspaceFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
