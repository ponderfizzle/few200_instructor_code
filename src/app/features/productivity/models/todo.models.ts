export interface TodoListModel {

  list: TodoListItem[];
  summary: TodoListSummary

}

export interface TodoListItem {
  id: string;
  description: string;
  project?: string;
  completed: boolean;
  saved: boolean;
}

export interface TodoListSummary {
  totalTodos: number;
  incomplete: number;
  complete: number;
}

/*
TodoListMomdel{
  list: [
    {
      id: "something",
      description: "something",
      project: "maybe",
      completed: false,
      saved: true
    }
  ]
}
*/
