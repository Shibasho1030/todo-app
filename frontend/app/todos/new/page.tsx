import { createTodoAction } from "@/_lib/actions";
import { requireAuth } from "@/_lib/requireAuth";

async function Page() {
  await requireAuth();
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
          className="rounded w-full border px-3 py-2"
        />

        <label htmlFor="content" className="block font-bold mb-2">
          本文（100文字以内）
        </label>
        <textarea
          id="content"
          name="content"
          rows={4}
          className="w-full rounded border px-3 py-2"
        />

        <label htmlFor="due-date" className="block font-bold mb-2">
          予定日
        </label>
        <input
          id="due_date"
          name="due_date"
          type="date"
          className="w-full rounded border px-3 py-2"
        />

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
