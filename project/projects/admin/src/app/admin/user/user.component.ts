import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
// import { controllers } from 'chart.js';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PopoverDirective } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MustMatchpwd } from '../../helpers/MustMatchpwd';
// import { Role } from '../../models/Role';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
  // test observerble
  users: User[];
  user: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  returnUrl: string;
  // checkbox
  itemSelected: any[] = [];
  selectAll: boolean;
  // table
  userForm: FormGroup;
  isEdit = false;
  submitted = false;
  loading = false;
  roles: any;
  role: any;

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
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {

    this.entries = [
      { name: '10', value: 10 },
      { name: '20', value: 20 },
      { name: '50', value: 50 },
      { name: '100', value: 100 }
    ];

    this.roles = [
      { name: 'Admin', value: 0 },
      { name: 'User', value: 1 }
    ];

    this.userForm = this.fb.group({
      UserName: ['', Validators.required],
      DisplayName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm: ['', Validators.required],
      Role: ['', Validators.required]
    },
      {
        validator: MustMatchpwd('Password', 'Confirm')
      });

    this.readData();
  }

  // validate form
  setForm(user: any): void {
    if (user == null) {
      this.userForm.patchValue({});
    } else {
      this.userForm.patchValue({
        UserName: user.username,
        Password: user.password,
        DisplayName: user.name,
        Email: user.email,
        Role: user.role
      });
    }
  }
  setUserJson(): void {
    this.user = {
      username: this.userfbc.UserName.value,
      password: this.userfbc.Password.value,
      name: this.userfbc.DisplayName.value,
      email: this.userfbc.Email.value,
      role: this.userfbc.Role.value
    };
  }

  get userfbc() { return this.userForm.controls; }

  createNewUser(): void {
    this.setForm(null);
    this.userModal.show();
  }

  editUser(user: User): void {
    console.log(this.userfbc);
    this.setForm(user);
    this.isEdit = true;
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
    this.loading = true;
    this.setUserJson();

    if (this.isEdit == true) {
      this.updateData(this.user);
    } else {
      this.createData(this.user);
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value));
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
        this.users = data['user'];
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
        this.toastr.success(data.message, 'Deleted!');
        this.readData();
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** CREATE: create the user from userservice */
  createData(user: User): void {
    const usersObservable = this.userService.createUser(user).pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: () => {
        this.readData();
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** UPDATE: update the user from userservice */
  updateData(user: User): void {
    const usersObservable = this.userService.updateUser(user).pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: () => {
        this.readData();
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }
  pagination(page: number, entry: number): void {
    const usersObservable = this.userService.pagination(page, entry).pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: (data) => {
        this.users = data.records;
        data.paging.pages.forEach(element => {
          if (element.current_page == 'yes') {
            this.currentPage = element.page;
            // handle routing crisis angular
            this.router.navigate(['../', data.paging.pages], { relativeTo: this.route });
          }
        });
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
  isOpenChange(event: any) {
    console.log(Number(event));
  }
  // pagnation function
  pageChanged(event: any): void {
    this.pagination(Number(event.page), Number(this.entry));
  }

  // getItems per Page
  getItems() {
    // get the users success
    return this.users ? this.users : [];
    // return this.users ? this.users.slice(
    //   (this.currentPage - 1) * Number(this.entry), Number(this.entry) + (this.currentPage - 1) * Number(this.entry)
    // ) : [];
  }
}
// problems :
// routing crisis and _nav must be handle in tonight
