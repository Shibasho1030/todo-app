"use server";

import { createTodo } from "./todosApi";
import { redirect } from "next/navigation";

/* cookieの問題でclientコンポーネントからしかApiを叩けなかったため削除
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
  redirect("/todos");
}
