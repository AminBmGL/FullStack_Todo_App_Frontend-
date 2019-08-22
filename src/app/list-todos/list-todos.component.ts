import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
todos:Todo[]=[];
  constructor(private todoService:TodoService,
              private router:Router ) { }

  ngOnInit() {
    this.todoService.findAllTodos('Amin').subscribe((todos)=>{
      this.todos=todos
    })
  }

  updateTodo(id){
  this.router.navigate(['/todos',id])
    }

  deleteTodo(id){
  this.todoService.deleteTodo('Amin',id)
  .subscribe((response)=>{
    this.todos=this.todos.filter((todo)=>todo.id!==id)
  }
  )
  }

}
