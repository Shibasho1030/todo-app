import { createTodoAction } from "@/_lib/actions";
import { getTodo } from "@/_lib/todosApi";

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const todo = await getTodo(Number(id));

  return (
    <div className="mx-auto">
      <h1 className="mt-4 mb-8 text-2xl font-bold">Todo 新規追加</h1>
      <form action={createTodoAction} className="space-y-6">
        <label htmlFor="title" className="block font-bold mb-2">
          タイトル
        </label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={todo.title}
          className="rounded w-full border px-3 py-2"
        />

        <label htmlFor="content" className="block font-bold mb-2">
          本文（100文字以内）
        </label>
        <textarea
          id="content"
          name="content"
          rows={4}
          defaultValue={todo.content}
          className="w-full rounded border px-3 py-2"
        />

        <label htmlFor="due-date" className="block font-bold mb-2">
          予定日
        </label>
        <input
          id="due_date"
          name="due_date"
          type="date"
          defaultValue={todo.due_date}
          className="w-full rounded border px-3 py-2"
        />

        <label htmlFor="completed" className="block font-bold mb-2">
          進捗状況
        </label>
        <select
          id="completed"
          name="completed"
          type="completed"
          defaultValue={todo.completed}
          className="w-full rounded border px-3 py-2"
        >
          <option value={true}>完了</option>
          <option value={false}>未完了</option>
        </select>

        <button
          type="submit"
          className="rounded border block px-3 py-2 text-[#DDE6ED] bg-[#27374D] hover:bg-[#526D82]"
        >
          追加
        </button>
      </form>
    </div>
  );
}

export default Page;
