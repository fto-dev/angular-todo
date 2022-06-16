import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  constructor() {
  }

  todoList = [
    {
      "id": 0,
      "content": "todo content",
      "status": true
    },
    {
      "id": 1,
      "content": "todo content 2",
      "status": false
    },
    {
      "id": 3,
      "content": "todo content 3",
      "status": false
    }
  ];


  ngOnInit(): void {
  }

}
