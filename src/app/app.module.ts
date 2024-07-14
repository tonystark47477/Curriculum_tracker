import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { FaclogComponent } from './faclog/faclog.component';
import { SelreqComponent } from './selreq/selreq.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdmhomeComponent } from './admhome/admhome.component';
import { FachomeComponent } from './fachome/fachome.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FacultyComponent,
    HomeComponent,
    RequirementsComponent,
    FaclogComponent,
    SelreqComponent,
    AdmhomeComponent,
    FachomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
