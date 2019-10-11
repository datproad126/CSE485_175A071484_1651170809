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

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  private componetDestroyed: Subject<any> = new Subject();

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
  @ViewChild('primaryModal', { static: true }) primaryModal: ModalDirective;
  @ViewChild('pop', { static: true }) pop: PopoverDirective;
  constructor(private fb: FormBuilder, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.setForm({});
    this.entries = [
      { name: '10', value: 10 },
      { name: '20', value: 20 },
      { name: '50', value: 50 },
      { name: '100', value: 100 }
    ];
    this.readData();
  }

  ngOnDestroy() {
    this.componetDestroyed.next();
    this.componetDestroyed.unsubscribe();
  }


  // Observable data get method restapi
  readData(): void {

    const usersObservable = this.userService.readUserData();
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

  // Observable data post method restapi
  deleteData(user: User[]): void {

    const usersObservable = this.userService.deleteData(user).pipe(takeUntil(this.componetDestroyed));
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
    this.deleteData(user);
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
    return this.users ? this.users.slice(
      (this.currentPage - 1) * Number(this.entry), Number(this.entry) + (this.currentPage - 1) * Number(this.entry)
    ) : [];
  }
}
