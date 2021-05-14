import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TodoListSummary } from '../../models';

@Component({
  selector: 'app-todo-list-summary',
  templateUrl: './todo-list-summary.component.html',
  styleUrls: ['./todo-list-summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListSummaryComponent implements OnInit {
  @Input() summary: TodoListSummary;
  currentlySelectedFilter: any;
  @ViewChild('allTodos') allTodoFilter: ElementRef;
  @ViewChild('completeTodos') completeTodosFilter: ElementRef;
  @ViewChild('notCompleteTodos') notCompleteTodosFilter: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.allTodoFilter.nativeElement.classList.add('selected');
    this.currentlySelectedFilter = this.allTodoFilter;
  }

  setSelectedClass(filterClicked) {
    this.currentlySelectedFilter.nativeElement.classList.remove('selected');

    switch (filterClicked) {
      case "allTodos":
        this.allTodoFilter.nativeElement.classList.add('selected');
        this.setCurrentFilter(this.allTodoFilter);
        break;
      case "completeTodos":
        this.completeTodosFilter.nativeElement.classList.add('selected');
        this.setCurrentFilter(this.completeTodosFilter);
        break;
      case "notCompleteTodos":
        this.notCompleteTodosFilter.nativeElement.classList.add('selected');
        this.setCurrentFilter(this.notCompleteTodosFilter);
        break;
      default:
        break;
    }
  }

  setCurrentFilter(filter: ElementRef) {
    this.currentlySelectedFilter = filter;
  }

}
