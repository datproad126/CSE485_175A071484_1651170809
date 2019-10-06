import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { controllers } from 'chart.js';
// import { UserService } from '../../../services/user.service';
// import { User } from '../../../model/user';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // test observerble
  users: User[];
  // checkbox
  itemSelected: any[] = [];
  selectAll: boolean;
  // table
  editForm: FormGroup;
  editedUser: any;
  isEdit = false;
  submitted = false;

  // pagnation
  totalItems = 64;
  maxSize = 5;
  bigTotalItems: number;
  currentPage = 1;
  numPages = 0;
  maxpage: number;
  entry = '10';
  entries: any[];
  @ViewChild('primaryModal', { static: true }) primaryModal;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {

    this.setForm({});
    this.entries = [
      { name: '10', value: 10 },
      { name: '20', value: 20 },
      { name: '50', value: 50 },
      { name: '100', value: 100 }
    ];
    this.getData();
  }
  // Observable data get method restapi
  getData(): void {
    const usersObservable = this.userService.readUserData();
    const usersObserverhttp = {
      next: (data) => {
        this.users = data['user'];
        this.bigTotalItems = this.users.length;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }

  // validate form
  setForm(user: any): void {
    // edit form
    this.editForm = this.fb.group({
      UserName: [user.username, Validators.required],
      DisplayName: [user.name, Validators.required],
      Email: [user.email, Validators.required],
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
    // edit remove
    this.users.splice(this.users.indexOf(this.users.find(x => user.id)), 1);
    console.log('success');
  }

  onChange($event: any): void {
    console.log('event', $event);
  }

  // viewUser(user: any){
  //   // extension viewUser
  // }

  // *** add some filter for admin: sort a>z z>a, status date login, status date logout, filter name, filter email, filter
  // sort date created, role
  onSubmit() {
    // do something store data
    alert('how many time i clicked the button');
  }

  // checkUncheckAll
  checkUncheckAll(event: any): void {
    for (const item of this.users) {
      this.itemSelected[item.id] = event;
    }
  }

  // pagnation function
  pageChanged(event: any): void {
    // this.configPagination.currentPage = event.page;
    // event.itemsPerPage = Number(this.entry);
  }

  // getItems per Page
  getItems() {
    return this.users ? this.users.slice((this.currentPage - 1) * Number(this.entry), Number(this.entry) + (this.currentPage - 1) * Number(this.entry)) : [];
  }
}
