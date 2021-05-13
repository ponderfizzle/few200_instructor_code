import { Component, Input, OnInit } from '@angular/core';
import { captureRejectionSymbol } from 'events';
import { TodoListItem } from '../../models';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todoItem: TodoListItem;

  constructor() { }

  ngOnInit(): void {
  }


}
