import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ContentPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContentPagesModule { }
