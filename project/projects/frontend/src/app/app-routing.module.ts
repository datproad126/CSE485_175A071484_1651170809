import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { Error404Component } from './error/error404.component';
import { Error500Component } from './error/error500.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  // {
  //   path: '404',
  //   component: Error404Component,
  //   data: {
  //     title: 'error404'
  //   }
  // },
  {
    path: '500',
    component: Error500Component,
    data: {
      title: 'error500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'register'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'default'
    },
    children: [
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'introduce',
        component: IntroduceComponent
      },
      {
        path: 'content',
        component: ContentLayoutComponent
      }
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
