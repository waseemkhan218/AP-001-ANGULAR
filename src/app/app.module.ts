import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// We need forms module when using ngModal 
import { FormsModule } from '@angular/forms';
// components: Adding new components
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DatabindingAssignmentComponent } from './databinding-assignment/databinding-assignment.component';
import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DataBindingComponent,
    DatabindingAssignmentComponent,
    DirectivesAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
