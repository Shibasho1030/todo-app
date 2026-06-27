import { Todo } from "@/helper/types";
import TodosItem from "./TodosItem";
import Link from "next/link";
import Filter from "./Filter";

type TodosProps = {
  todos: Todo[];
};

function TodosList({ todos }: TodosProps) {
  return (
    <div className="mt-6 mx-2">
      <div className="flex justify-between">
        <Link
          href="/todos/new"
          className="rounded text-sm text-[#DDE6ED] font-bold bg-[#27374D] px-3 py-2 md:px-4 md:py-3 hover:bg-[#526D82]"
        >
          新規追加
        </Link>
        <Filter />
      </div>

      <ul className="mt-6">
        {todos.length > 0 ? (
          todos.map((todo: Todo) => <TodosItem todo={todo} key={todo.id} />)
        ) : (
          <li>タスクを追加してください</li>
        )}
      </ul>
    </div>
  );
}

export default TodosList;
