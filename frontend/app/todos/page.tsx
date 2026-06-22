import TodosList from "@/_components/TodosList";
import { getTodos } from "@/_lib/todosApi";

export const metadata = {
  title: "Todos",
};

async function Page() {
  const todos = await getTodos();
  console.log("start.........................................");
  console.log(todos);
  return <TodosList todos={todos} />;
}

export default Page;
