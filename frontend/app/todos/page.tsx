import TodosList from "@/_components/TodosList";
import { getTodos } from "@/_lib/todosApi";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Todos",
};

async function Page() {
  const todos = await getTodos();
  return <TodosList todos={todos} />;
}

export default Page;
