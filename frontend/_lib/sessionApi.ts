import { User } from "@/helper/types";
import { API_BASE_URL } from "./apiConfig";
import { cookies } from "next/headers";

type LoginParams = {
  email: string;
  password: string;
};

export async function login(params: LoginParams): Promise<User> {
  const cookieStore = await cookies();
  const res = await fetch(`${API_BASE_URL}/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    // credentials: "include",
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
  const cookieStore = await cookies();
  const res = await fetch(`${API_BASE_URL}/session`, {
    method: "DELETE",
    headers: {
      Cookie: cookieStore.toString(),
    },
    // credentials: "include",
  });

  if (!res.ok) throw new Error("ログアウトに失敗しました");
}

// import { User } from "@/helper/types";

// type LoginParams = {
//   email: string;
//   password: string;
// };

// export async function login(params: LoginParams): Promise<User> {
//   const res = await fetch("/api/session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({
//       email: params.email,
//       password: params.password,
//     }),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.error ?? "ログインに失敗しました");
//   }

//   return data;
// }

// export async function logout(): Promise<void> {
//   const res = await fetch("/api/session", {
//     method: "DELETE",
//     credentials: "include",
//   });

//   if (!res.ok) {
//     throw new Error("ログアウトに失敗しました");
//   }
// }
