import { getTodo } from "@/_lib/todosApi";
import Link from "next/link";

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const todo = await getTodo(Number(id));
  return (
    <div className="rounded mt-4 mb-5 border px-6 pt-2 pb-7 md:gap-10 items-center justify-between">
      <div className="text-3xl mb-8 font-semibold">{todo.title}</div>

      <div className="flex">
        <label className="">本文：</label>
        <p className="mb-4 font-semibold">{todo.content}</p>
      </div>

      <div className="flex">
        <label>予定日：</label>
        <div className="mb-4 font-semibold border-b-2">{todo.due_date}</div>
      </div>

      <div className="flex">
        <label>完了状態：</label>
        <p className="text-md mb-10 font-semibold">
          {todo.completed ? "完了" : "未完了"}
        </p>
      </div>

      <Link
        href={`/todos/${id}/edit`}
        className="border px-3 py-2 mt-4 bg-[#27374D] text-[#DDE6ED] rounded"
      >
        編集
      </Link>
    </div>
  );
}

export default Page;
