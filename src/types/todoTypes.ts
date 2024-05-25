
export interface Todo {
    id: number;
    title: string;
    description: string;
  }
  
  export interface TodoEditorProps {
    todoId: Todo['id'];
  }
  
  
  
  export interface TodoDetailProps {
    todo: Todo;
  }