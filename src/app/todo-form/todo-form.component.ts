import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  activeTodo:Todo;
  constructor(private todoService :TodoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
this.route.params.subscribe((params)=>{
if(params.id){
  this.todoService.findTodo('Amin',params.id)
  .subscribe((todo)=>{
    this.activeTodo=todo;
  })
}
})
  }

  saveTodo(username,todo){
 this.todoService.updateTodo('Amin',this.activeTodo.id,this.activeTodo)
 .subscribe((todo)=>{
 this.router.navigate(['todos']);
 })
  }

}
