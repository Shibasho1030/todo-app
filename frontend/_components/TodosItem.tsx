"use client";

import { Todo } from "@/helper/types";
import Link from "next/link";

type TodoProps = {
  todo: Todo;
};

function TodosItem({ todo }: TodoProps) {
  return (
    <li className="rounded mb-5 border p-3 flex md:gap-10 items-center justify-between">
      <Link href={`/todos/${todo.id}`} className="flex gap-2 items-end">
        <h2 className="text-[#27374D] md:text-xl">{todo.title}</h2>
        <p className="text-xs text-[#27374D]">{todo.due_date}</p>
      </Link>
      <div className="flex gap-2">
        <Link
          href={`/todos/${todo.id}/edit`}
          className="rounded bg-green-500 px-2 py-1 md:px-4 md:py-2 text-sm font-bold text-[#DDE6ED] hover:bg-green-600 cursor-pointer"
        >
          編集
        </Link>

        <button className="rounded bg-red-500 px-2 py-1 md:px-4 md:py-2 text-sm font-bold text-[#DDE6ED] hover:bg-red-600 cursor-pointer">
          削除
        </button>
      </div>
    </li>
  );
}

export default TodosItem;
