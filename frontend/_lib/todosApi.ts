import { Todo } from "@/helper/types";
import { API_BASE_URL } from "./apiConfig";
import { cookies } from "next/headers";

type CreateTodoParams = {
  title: string;
  content?: string;
  due_date?: string;
};

type UpdateTodoParams = {
  title?: string;
  content?: string;
  completed?: boolean;
  due_date?: string;
};

export async function getTodos(): Promise<Todo[]> {
  const cookieStore = await cookies();
  const res = await fetch(`${API_BASE_URL}/todos`, {
    method: "GET",
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.error ?? "Todo一覧の取得に失敗しました");

  return data;
}

export async function getTodo(id: number): Promise<Todo> {
  const cookieStore = await cookies();
  const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "GET",
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.error ?? "Todoの取得に失敗しました");

  return data;
}

export async function createTodo(params: CreateTodoParams): Promise<Todo> {
  const cookieStore = await cookies();
  const res = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    // credentials: "include",
    body: JSON.stringify({
      title: params.title,
      content: params.content,
      due_date: params.due_date,
    }),
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(data.errors?.join(", ") ?? "Todo作成に失敗しました");

  return data;
}

export async function updateTodo(
  id: number,
  params: UpdateTodoParams,
): Promise<Todo> {
  const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      todo: params,
    }),
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(data.errors?.join(", ") ?? "Todo更新に失敗しました");

  return data;
}

export async function deleteTodo(id: number): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Todo削除に失敗しました");
}
