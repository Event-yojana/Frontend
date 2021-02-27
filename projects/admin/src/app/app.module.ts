import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { SidebarComponent } from './Shared/Components/sidebar/sidebar.component';
import { DashboardComponent } from './Pages/full-page/dashboard/dashboard.component';
import { EmailTemplateComponent } from './Pages/full-page/email-template/email-template.component';
import { LoginComponent } from './Pages/content/login/login.component';
import { RegisterComponent } from './Pages/content/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    EmailTemplateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
