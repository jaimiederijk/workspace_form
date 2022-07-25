import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewWorkspaceFormComponent } from './new-workspace-form/new-workspace-form.component';
import { ListCheckDirective } from './list-check.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewWorkspaceFormComponent,
    ListCheckDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
