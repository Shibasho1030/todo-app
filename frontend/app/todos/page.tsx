import TodosList from "@/_components/TodosList";
import { requireAuth } from "@/_lib/requireAuth";
import { getTodos } from "@/_lib/todosApi";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Todos",
};

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ completed?: string }>;
}) {
  await requireAuth();
  const todos = await getTodos();

  const { completed = "all" } = await searchParams;
  const filteredTodos =
    completed === "true"
      ? todos.filter((todo) => todo.completed)
      : completed === "false"
        ? todos.filter((todo) => !todo.completed)
        : todos;

  return <TodosList todos={filteredTodos} />;
}

export default Page;
