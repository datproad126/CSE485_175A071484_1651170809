
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

// import { controllers } from 'chart.js';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PopoverDirective, TypeaheadMatch } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MustMatchpwd } from '../../helpers/MustMatchpwd';
import { Roles } from '../../models/Role';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  get userfbc() { return this.userForm.controls; }
  // observerble variable
  users: User[];
  fieldUsers: any;
  dataPost: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  // checkbox
  itemSelected: any[] = [];
  selectAll: boolean;
  isVisible = false; // whenever you need to hide an element
  selected: boolean;

  // table
  userForm: FormGroup;
  isEdit = false;
  submitted = false;
  loading = false;
  roles: any;

  // pagnation
  totalItems = 64;
  maxSize = 5;
  bigTotalItems: number;
  currentPage = 1;
  numPages = 0;
  maxpage: number;
  entry: any;
  entries: any[];

  // search
  filterSearchingRes: any[];
  filterSearching: any;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;

  // filter
  sort: any;
  sorts: any[];
  filter: any;

  @ViewChild('userModal', { static: true }) userModal: ModalDirective;
  @ViewChild('pop', { static: true }) pop: PopoverDirective;
  @ViewChild('selected', { static: true }) isselected: any;

  ngOnInit() {
    this.roles = Roles;
    this.entry = '10';
    this.filterSearching = 'id';
    this.filter = 'id';
    this.sort = 'ASC';
    this.selectAll = false;

    this.sorts = [
      { name: 'low to high', value: 'ASC' },
      { name: 'high to low', value: 'DESC' }
    ];

    this.fieldUsers = [
      { name: 'id', value: 'id' },
      { name: 'username', value: 'username' },
      { name: 'name', value: 'display_name' },
      { name: 'registered date', value: 'registered_date' },
      { name: 'email', value: 'email' }
    ];

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
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm: ['', Validators.required],
      Role: ['', Validators.required]
    },
      {
        validator: MustMatchpwd('Password', 'Confirm')
      });

    this.readData();
    this.pagination(1, Number(this.entry), this.sort, this.filter);
    this.searching('', this.filterSearching);
  }

  // validate form
  setForm(user: any): void {
    if (user == null) {
      this.userForm.patchValue({});
    } else {
      this.userForm.patchValue({
        UserName: [user.username],
        Password: [user.password],
        DisplayName: [user.name],
        Email: [user.email],
        Role: [user.role]
      });
    }
  }

  createNewUser(): void {
    this.setForm(null);
    this.userModal.show();
  }

  editUser(user: User): void {
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

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.dataPost = {
      username: this.userfbc.UserName.value,
      password: this.userfbc.Password.value,
      name: this.userfbc.DisplayName.value,
      email: this.userfbc.Email.value,
      role: this.userfbc.Role.value
    };
    this.loading = true;

    if (this.isEdit) {
      this.updateData(this.dataPost);
    } else {
      this.createData(this.dataPost);
    }
    // display form values on success
    // console.log('Submit SUCCESS!! :-)\n\n', this.userForm.value);
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
        this.bigTotalItems = data.count;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** DELETE: delete the user from userservice */
  deleteData(user: User[]): void {
    const usersObservable = this.userService.deleteData(user).pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: (data) => {
        this.toastr.success(data.message, 'Deleted!');
        this.readData();
        this.pagination(Number(this.currentPage), Number(this.entry), this.sort, this.filter);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** DELETE ALL: delete all of users in current pagination from userservice */
  deleteALLData(ids: any[]): void {
    const usersObservable = this.userService.deleteAllData(ids).pipe(
      takeUntil(this.destroy$)
    );
    const usersObserverhttp = {
      next: (data) => {
        this.toastr.success(data.message, 'Deleted!');
        this.readData();
        this.pagination(Number(this.currentPage), Number(this.entry), this.sort, this.filter);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** CREATE: create the user from userservice */
  createData(user: any): void {
    const usersObservable = this.userService.createUser(user).pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: () => {
        this.readData();
        this.pagination(Number(this.currentPage), Number(this.entry), this.sort, this.filter);
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

  /** PAGINATION: pagination the user from userservice */
  pagination(page: number, entry: number, sort: string, filter: string): void {
    const usersObservable = this.userService.pagination(page, entry, sort, filter).pipe(takeUntil(this.destroy$));
    const usersObserverhttp = {
      next: (data) => {
        this.users = data.records;
        data.paging.pages.forEach(element => {
          if (element.current_page == 'yes') {
            this.currentPage = element.page;
            // handle routing crisis angular
          }
        });
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  /** SEARCHING: searching the user from userservice */
  searching(search: string, field: string): void {
    const usersObservable = this.userService.searching(search, field).pipe(takeUntil(this.destroy$));

    const usersObserverhttp = {
      next: (data) => {
        if (search !== '') {
          this.currentPage = 1;
          this.bigTotalItems = data.records.length;
          this.users = data.records;
        } else {
          this.filterSearchingRes = data.records;
        }
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };

    const subscription = usersObservable.subscribe(usersObserverhttp);
  }

  // searching With Filter on enter click
  searchingWithFilter(event: TypeaheadMatch): void {
    console.log(event.value);
    if (event.value == undefined || event.value == null || event.value == '') {
      this.readData();
      this.pagination(1, Number(this.entry), this.sort, this.filter);
    } else {
      this.searching(event.value, this.filterSearching);
    }
  }
  // searching With Filter on click typehead
  typeaheadOnSelect(event: TypeaheadMatch): void {
    this.searching(event.value, this.filterSearching);
    console.log('Selected value: ', event.value);
  }
  // get filter searching value
  isOpenChangeFilterSearching(event: any): void {
    this.resetFeatureCheck();
    this.filterSearching = event;
    this.searching('', this.filterSearching);
  }

  // change entry
  isOpenChangeEntry(event: any): void {
    this.resetFeatureCheck();
    this.entry = event;
    this.pagination(1, Number(this.entry), this.sort, this.filter);
  }
  // pagnation
  pageChanged(event: any): void {
    this.resetFeatureCheck();
    this.pagination(Number(event.page), Number(this.entry), this.sort, this.filter);
  }
  // get pagination with filter
  isOpenChangeFilter(event: any) {
    this.resetFeatureCheck();
    this.filter = event;
    this.pagination(1, Number(this.entry), this.sort, this.filter);
  }
  // get pagination with filter and sort
  isOpenChangeSort(event: any) {
    this.resetFeatureCheck();
    this.sort = event;
    this.pagination(1, Number(this.entry), this.sort, this.filter);
  }

  // check each element
  onChange($event: any): void {
    this.selectAll = false;
    this.isVisible = false;
    console.log('event', $event);
  }

  // checkUncheckAll
  checkUncheckAll(event: any): void {
    this.isVisible = !this.isVisible;
    this.selectAll = !this.selectAll;
    for (const item of this.users) {
      this.itemSelected[item.id] = this.selectAll;
    }
  }
  // multi delete
  multiDelelte(event: any): void {
    this.isVisible = !this.isVisible;
    for (const item of this.users) {
      this.itemSelected[item.id] = event;
    }
  }
  // delete all
  deleteAll(): void {
    this.isVisible = false;
    this.selectAll = false;
    this.deleteALLData(this.users);
    this.resetFeatureCheck();
    this.readData();
    this.pagination(Number(this.currentPage), Number(this.entry), this.sort, this.filter);
  }

  resetFeatureCheck(): void {
    this.isVisible = false;
    this.selectAll = false;
    for (const item of this.users) {
      this.itemSelected[item.id] = false;
    }
  }
}

