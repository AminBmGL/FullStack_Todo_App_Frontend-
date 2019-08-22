import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) {}
  findTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/api/${username}/todos/${id}`)
  }
  findAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/api/${username}/todos`)
  }

  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8080/api/${username}/todos/${id}`)
  }
}
