import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

// import { controllers } from 'chart.js';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PopoverDirective } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MustMatchpwd } from './must-matchpwd';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
  // test observerble
  users: User[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  // checkbox
  itemSelected: any[] = [];
  selectAll: boolean;
  // table
  userForm: FormGroup;
  // editedUser: any;
  isEdit = false;
  submitted = false;
  emptyUser: User = { id: null, username: null, password: null, name: null, email: null, dateCreated: null, role: null };

  // pagnation
  totalItems = 64;
  maxSize = 5;
  bigTotalItems: number;
  currentPage = 1;
  numPages = 0;
  maxpage: number;
  entry = '10';
  entries: any[];

  @ViewChild('userModal', { static: true }) userModal: ModalDirective;
  @ViewChild('pop', { static: true }) pop: PopoverDirective;
  constructor(private fb: FormBuilder, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {

    this.entries = [
      { name: '10', value: 10 },
      { name: '20', value: 20 },
      { name: '50', value: 50 },
      { name: '100', value: 100 }
    ];

    this.userForm = this.fb.group({
      UserName: ['', Validators.required],
      DisplayName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required, Validators.minLength(30)],
      Confirm: ['', Validators.required],
      Role: ['', Validators.required]
    },
      {
        validators: MustMatchpwd('Password', 'Confirm')
      });

    this.setForm(this.emptyUser);
    this.readData();
  }

  // validate form
  setForm(user: User): void {
    this.userForm.patchValue({
      UserName: [user.username, Validators.required],
      DisplayName: [user.name, Validators.required],
      Email: [user.email, [Validators.required, Validators.email]],
      Role: [user.role, Validators.required],
    });
    this.isEdit = !!user.username;
  }

  get userfbc() { return this.userForm.controls; }

  createNewUser(): void {
    this.setForm(this.emptyUser);
    this.userModal.show();
  }

  editUser(user: User): void {
    this.setForm(user);
    this.userModal.show();
  }

  removeUser(user: User[]): void {
    this.deleteData(user);
  }

  // viewUser(user: User[]): void {
  //   // extension viewUser
  //   // do something
  // }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! =))\n\n' + JSON.stringify(this.userForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  /** READ: read the user from userservice */
  readData(): void {
    const usersObservable = this.userService.readUserData().pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: (data) => {
        this.users = data.user;
        this.bigTotalItems = this.users.length;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** DELETE: read the user from userservice */
  deleteData(user: User[]): void {
    const usersObservable = this.userService.deleteData(user).pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: (data) => {
        this.toastr.success(data.body.message, 'Deleted!');
        this.readData();
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** CREATE: create the user from userservice */
  createData(): void {
    const usersObservable = this.userService.readUserData().pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: (data) => {
        this.users = data.user;
        this.bigTotalItems = this.users.length;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** UPDATE: update the user from userservice */
  updateData(): void {
    const usersObservable = this.userService.readUserData().pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: (data) => {
        this.users = data.user;
        this.bigTotalItems = this.users.length;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  onChange($event: any): void {
    console.log('event', $event);
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
    return this.users ? this.users.slice(
      (this.currentPage - 1) * Number(this.entry), Number(this.entry) + (this.currentPage - 1) * Number(this.entry)
    ) : [];
  }
}
// problems :
//    1.pagination vẫn chưa hoàn chỉnh khi thêm nhiều bản ghi mới và xóa đi nhiều bản ghi ko cập nhật luôn
//    2.delete bị lỗi xóa theo index vẫn chưa khắc phục
//    3.form validation vẫn chưa xong
//    4.thiếu một vài chức năng filter cho người quản trị
//    JWT authentication
//    auth guard
//    http error interceptor
//    fake backend provider
//    JWT interceptor
