import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewWorkspaceFormComponent } from './new-workspace-form/new-workspace-form.component';
import { ListCheckDirective } from './list-check.directive';
import { WorkspaceheaderComponent } from './workspaceheader/workspaceheader.component';
import { HomeComponent } from './home/home.component';
import { NewWorkspaceFormModeldrivenComponent } from './new-workspace-form-modeldriven/new-workspace-form-modeldriven.component';

@NgModule({
  declarations: [
    AppComponent,
    NewWorkspaceFormComponent,
    ListCheckDirective,
    WorkspaceheaderComponent,
    HomeComponent,
    NewWorkspaceFormModeldrivenComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
