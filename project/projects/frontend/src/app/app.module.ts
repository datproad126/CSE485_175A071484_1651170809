import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { Error404Component } from './error/error404.component';
import { Error500Component } from './error/error500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HomepageComponent,
    IntroduceComponent,
    ContentLayoutComponent,
    Error404Component,
    Error500Component,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
