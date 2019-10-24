import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// User Component
import { UserComponent } from './user/user.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, AlertModule, PaginationModule, PopoverModule, TypeaheadModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Category Component
import { CategoryComponent } from './category/category.component';
// Post Component
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    UserComponent,
    CategoryComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    HttpClientModule,
    PopoverModule.forRoot(),
    TypeaheadModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1250,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
  ]
})
export class AdminModule { }
