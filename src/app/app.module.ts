import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainConfigComponent} from './components/main-config/main-config.component';
import {SkillConfigComponent} from './components/skill-config/skill-config.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ConfigViewerComponent} from './components/config-viewer/config-viewer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

const appRoutes: Routes = [
  {path: 'mainConfiguration', component: MainConfigComponent},
  {path: 'home', component: HomeComponent},
  {path: 'skillConfiguration', component: SkillConfigComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainConfigComponent,
    SkillConfigComponent,
    HomeComponent,
    ConfigViewerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
