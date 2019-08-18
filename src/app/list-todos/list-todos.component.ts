import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
todos:Todo[]=[];
  constructor() { }

  ngOnInit() {
  }

}
