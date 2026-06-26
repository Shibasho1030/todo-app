"use server";

import { revalidatePath } from "next/cache";
import { createTodo, deleteTodo, updateTodo } from "./todosApi";
import { redirect } from "next/navigation";

/* cookieの問題でclientコンポーネントからしか、Apiを叩けなかったため削除 => Railsから返ったCookieをブラウザへ渡す処理がないため
export async function signupAction(formData: FormData) {
  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const passwordConfirmation = String(formData.get("passwordConfirmation"));

  await signup({ name, email, password, passwordConfirmation });
  redirect("/todos");
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  await login({ email, password });
  redirect("/todos");
}
*/

export async function createTodoAction(formData: FormData) {
  const title = String(formData.get("title"));
  const content = String(formData.get("content"));
  const due_date = String(formData.get("due_date"));

  await createTodo({ title, content, due_date });
  revalidatePath("/todos");
  redirect("/todos");
}

export async function updateTodoAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = String(formData.get("title"));
  const content = String(formData.get("content"));
  const due_date = String(formData.get("due_date"));
  const completed = formData.get("completed") === "true";
  await updateTodo(id, { title, content, due_date, completed });
  revalidatePath("/todos");
  revalidatePath(`/todos/${id}`);
  redirect(`/todos/${id}`);
}

export async function deleteTodoAction(formData: FormData) {
  const id = Number(formData.get("id"));
  await deleteTodo(id);
  revalidatePath("/todos");
  redirect("/todos");
}
