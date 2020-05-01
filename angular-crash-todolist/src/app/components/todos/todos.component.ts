import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // A class constructor in Angular is mostly used to inject dependencies. Angular
  // calls this constructor injection pattern. Details here https://angular.io/guide/dependency-injection#when-the-service-needs-a-service
  // in-depth architectural insights here - http://misko.hevery.com/2009/02/19/constructor-injection-vs-setter-injection/
  //
  // Common practice is put as little logic into contructor as possible
  constructor() { }


  // When Angular calls ngOnInit it has finished creating a component DOM
  // injected all required dependencies through constructor and processed 
  // input bindings. So here you have all the required information available
  // which makes it a good place to perform initilization logic.
  //
  // Common practice to use ngOnInit to perform initilization logic even if this
  // logic doesn't depend on DI, DOM or input bindings.
  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ]
  }

}
