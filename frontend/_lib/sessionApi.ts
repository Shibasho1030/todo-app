import { User } from "@/helper/types";
import { API_BASE_URL } from "./apiConfig";

type LoginParams = {
  email: string;
  password: string;
};

export async function login(params: LoginParams): Promise<User> {
  const res = await fetch(`${API_BASE_URL}/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: params.email,
      password: params.password,
    }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error("ログインに失敗しました");

  return data;
}

export async function logout(): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/session`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) throw new Error("ログアウトに失敗しました");
}
