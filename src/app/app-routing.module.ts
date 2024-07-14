import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { FaclogComponent } from './faclog/faclog.component';
import { HomeComponent } from './home/home.component';
import { AdmhomeComponent } from './admhome/admhome.component';
import { FachomeComponent } from './fachome/fachome.component';
 const routes: Routes = [
 {path:'' ,component:HomeComponent },
 {path:'admin',component:AdminComponent},
 {path:'faculty',component:FacultyComponent},
 {path:'requirements',component:RequirementsComponent},
 {path:'faclog',component:FaclogComponent},
 {path:'admhome', component: AdmhomeComponent },
 {path:'fachome', component: FachomeComponent  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
