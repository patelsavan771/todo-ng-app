import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!:string
  desc!: string
  // event emmiter, will will tell it's parent to do something to parent's elements
  // add todos ko naya todo add karna hai but todos array uske parent me define hai so yeh chillayega aur bolega todoko Add karo
  // aur koi method me eit kardene ka
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  
  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.todoAdd.emit(todo);
  }
}
