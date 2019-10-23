import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: 'user/:page',
        component: UserComponent,
        data: {
          title: 'User'
        }
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Category'
        }
      },
      {
        path: 'post',
        component: PostComponent,
        data: {
          title: 'Post'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
