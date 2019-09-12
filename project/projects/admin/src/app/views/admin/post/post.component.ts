import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalDirective } from 'ngx-bootstrap/modal';
// import {Observable} from "rxjs/index";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
