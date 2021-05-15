import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './Shared-pages/header/header.component';
import { FooterComponent } from './Shared-pages/footer/footer.component';
import { SidebarComponent } from './Shared-pages/sidebar/sidebar.component';
import { BreadcrumbComponent } from './Shared-pages/breadcrumb/breadcrumb.component';
import { BackTopComponent } from './Shared-pages/back-top/back-top.component';
import { SideChatComponent } from './Shared-pages/side-chat/side-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullPagesRoutingModule } from './full-pages-routing.module';
import { HorizontalMenuComponent } from './Shared-pages/menu/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './Shared-pages/menu/vertical-menu/vertical-menu.component';



@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    BackTopComponent,
    SideChatComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FullPagesRoutingModule,
  ]
})
export class FullPagesModule { }
