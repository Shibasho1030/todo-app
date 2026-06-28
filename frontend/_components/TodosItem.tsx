import { deleteTodoAction, toggleTodoAction } from "@/_lib/actions";
import { Todo } from "@/helper/types";
import Link from "next/link";

type TodoProps = {
  todo: Todo;
};

function TodosItem({ todo }: TodoProps) {
  return (
    <li className="rounded mb-5 border p-3 flex md:gap-10 items-center justify-between">
      <div className="flex gap-5 items-center">
        <form action={toggleTodoAction}>
          <input type="hidden" name="id" value={todo.id} />
          <input
            type="hidden"
            name="completed"
            value={String(!todo.completed)}
          />
          <button
            type="submit"
            className="cursor-pointer text-[#27374D] border border-[#27374D] rounded-full h-6 w-6 flex items-center justify-center"
          >
            {todo.completed ? "✓" : ""}
          </button>
        </form>
        <Link href={`/todos/${todo.id}`} className="flex gap-2 items-end">
          <h2 className="text-[#27374D] md:text-xl">{todo.title}</h2>
          <p className="text-xs text-[#27374D]">{todo.due_date}</p>
        </Link>
      </div>

      <div className="flex gap-2 shrink-0">
        <Link
          href={`/todos/${todo.id}`}
          className="rounded bg-sky-500 px-2 py-1 md:px-4 md:py-2 text-sm font-bold text-[#DDE6ED] hover:bg-sky-600 cursor-pointer"
        >
          詳細
        </Link>

        <Link
          href={`/todos/${todo.id}/edit`}
          className="rounded bg-green-500 px-2 py-1 md:px-4 md:py-2 text-sm font-bold text-[#DDE6ED] hover:bg-green-600 cursor-pointer"
        >
          編集
        </Link>

        <form action={deleteTodoAction}>
          <input type="hidden" name="id" value={todo.id} />

          <button
            type="submit"
            className="rounded bg-red-500 px-2 py-1 md:px-4 md:py-2 text-sm font-bold text-[#DDE6ED] hover:bg-red-600 cursor-pointer"
          >
            削除
          </button>
        </form>
      </div>
    </li>
  );
}

export default TodosItem;
