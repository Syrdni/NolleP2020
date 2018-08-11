import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { nib } from '../../node_modules/nib';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NollepInfoComponent } from './components/nollep-info/nollep-info.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { CrudComponent } from './components/crud/crud.component';

// import {RoutesArray} from './../app.routes';

const appRoutes: Routes = [
  { path: 'home',        component: HomeComponent },
  { path: 'new-student', component: NewStudentComponent },
  { path: 'info',        component: NollepInfoComponent },
  { path: 'scoreboard',  component: ScoreboardComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NollepInfoComponent,
    ScoreboardComponent,
    NewStudentComponent,
    CrudComponent
  ],
  imports: [
    NgbModule.forRoot(), // Bootstrap module
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
