import { Component, OnInit, Injectable, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import {Observable} from "rxjs/index";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // table
  editForm: FormGroup;
  users: any[];
  userList: any[];
  editedUser: any;
  isEdit: boolean = false;

  // pagnation
  totalItems: number = 64;
  maxSize: number = 5;
  bigTotalItems: number;
  currentPage: number = 0;
  numPages: number = 0;
  maxpage: number;

  // tools
  entry: number;
  entries: any[];
  @ViewChild('primaryModal', { static: true }) primaryModal;
  @Input() valueEntry: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userList = [
      { username: 'datngodoan', id: 1, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan1', id: 2, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan2', id: 3, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
      { username: 'datngodoan3', id: 4, name: 'dat ngo', created_dt: new Date(), role: 'admin' },
    ];
    this.bigTotalItems = this.userList.length;
    this.setForm({});
    this.entries = [
      { name: '10', value: 10 },
      { name: '20', value: 20 },
      { name: '50', value: 50 },
      { name: '100', value: 100 }
    ];
  }

  setForm(user: any): void {
    // edit form
    this.editForm = this.formBuilder.group({
      UserName: [user.username, Validators.required],
      DisplayName: [user.name, Validators.required],
      Password: ['', Validators.required],
      Confirm: ['', Validators.required],
      Role: [user.role, Validators.required]
    });

    this.isEdit = !!user.username;
  }

  createNewUser(): void {
    this.setForm({});
    this.primaryModal.show();
  }

  editUser(user: any): void {
    this.setForm(user);
    this.primaryModal.show();
  }

  removeUser(user: any): void {
    this.userList.splice(this.userList.indexOf(this.userList.find(x => user.id)), 1);
    console.log('success');
  }

  // viewUser(user: any){
  //   // extension viewUser
  // }
  // *** customize edit button done!
  // *** customize adduser button done!
  // *** customize pagination done !
  // *** model form:  elert when form has been Duplicated or wrong rule input
  // *** add some filter for admin: sort a>z z>a, status date login, status date logout, filter name, filter email, filter
  // sort date created, role
  onSubmit() {
    // do something store data
    alert('how many time i clicked the button');
  }

  // pagnaion function
  // keyDownFunction(event: any, pagevalue: string): void {
  //   this.maxpage = Math.ceil(this.bigTotalItems / 10);
  //   const keycode = event.keyCode;
  //   if (keycode === 13) {
  //     this.currentPage = Number(pagevalue);
  //     if (this.currentPage < 1) {
  //       this.currentPage = 1;
  //     } else {
  //       this.currentPage = this.maxpage;
  //     }
  //   }
  // }
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page );
  }

  // getItems service
  getItems() {
    return this.userList ? this.userList.slice(this.currentPage, this.valueEntry + this.currentPage) : [];
  }
}
