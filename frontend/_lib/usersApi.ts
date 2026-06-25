import { User } from "@/helper/types";
import { API_BASE_URL } from "./apiConfig";
import { cookies } from "next/headers";

type SignupParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export async function signup(params: SignupParams): Promise<User> {
  const cookieStore = await cookies();
  const res = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    // 今から送るbodyはJSON形式だとRailsに伝えるためのもの
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    // ブラウザがRailsのセッションCookieを一緒に送り,signup()でもログイン中ユーザーを判定できる
    // credentials: "include",
    body: JSON.stringify({
      name: params.name,
      email: params.email,
      password: params.password,
      password_confirmation: params.passwordConfirmation,
    }),
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(data.errors?.join(", ") ?? "ユーザー登録に失敗しました");

  return data;
}

export async function deleteAccount(): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/me`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) throw new Error("アカウント削除に失敗しました");
}

// import { User } from "@/helper/types";

// type SignupParams = {
//   name: string;
//   email: string;
//   password: string;
//   passwordConfirmation: string;
// };

// export async function signup(params: SignupParams): Promise<User> {
//   const res = await fetch("/api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({
//       name: params.name,
//       email: params.email,
//       password: params.password,
//       password_confirmation: params.passwordConfirmation,
//     }),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.errors?.join(", ") ?? "ユーザー登録に失敗しました");
//   }

//   return data;
// }
