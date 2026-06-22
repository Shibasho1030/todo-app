export type User = {
  id: number;
  name: string;
  email: string;
};

export type Todo = {
  id: number;
  title: string;
  content: string | null;
  completed: boolean;
  due_date: string | null;
  created_at: string;
  updated_at: string;
};
