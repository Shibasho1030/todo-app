import { getTodo } from "@/_lib/todosApi";

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const todo = await getTodo(Number(id));
  return (
    <div>
      <div>{todo.title}</div>
      <p>{todo.content}</p>
      <div>{todo.due_date}</div>
      <p>{todo.completed ? "完了" : "未完了"}</p>
    </div>
  );
}

export default Page;
