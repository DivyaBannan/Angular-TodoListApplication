import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { TodoServiceService } from '../../services/todo-service.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  OnToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }

  OnDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);

  }

}
