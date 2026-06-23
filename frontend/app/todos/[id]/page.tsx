import { getTodo } from "@/_lib/todosApi";
import Link from "next/link";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo = await getTodo(Number(id));
  return (
    <div className="rounded mt-4 mb-5 border px-6 pt-2 pb-7 md:gap-10 items-center justify-between">
      <Link
        href={`/todos/${id}/edit`}
        className="inline-block text-3xl mb-8 font-semibold"
      >
        {todo.title}
      </Link>

      <div className="flex">
        <Link href={`/todos/${id}/edit`} className="cursor-pointer">
          本文：
        </Link>
        <Link
          href={`/todos/${id}/edit`}
          className="mb-4 font-semibold cursor-pointer"
        >
          {todo.content}
        </Link>
      </div>

      <div className="flex">
        <Link href={`/todos/${id}/edit`} className="cursor-pointer">
          予定日：
        </Link>
        <Link
          href={`/todos/${id}/edit`}
          className="mb-4 font-semibold border-b-2 cursor-pointer"
        >
          {todo.due_date}
        </Link>
      </div>

      <div className="flex">
        <Link href={`/todos/${id}/edit`} className="cursor-pointer">
          完了状態：
        </Link>
        <Link
          href={`/todos/${id}/edit`}
          className="text-md mb-10 font-semibold cursor-pointer"
        >
          {todo.completed ? "完了" : "未完了"}
        </Link>
      </div>

      <div className="flex gap-3">
        <Link
          href={`/todos/${id}/edit`}
          className="border px-3 py-2 mt-4 bg-[#27374D] text-[#DDE6ED] rounded"
        >
          編集
        </Link>
        <Link
          href={`/todos/${id}/edit`}
          className="border px-3 py-2 mt-4 rounded"
        >
          戻る
        </Link>
      </div>
    </div>
  );
}

export default Page;
