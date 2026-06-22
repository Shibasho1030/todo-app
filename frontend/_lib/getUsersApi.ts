import { User } from "@/helper/types";
import { cookies } from "next/headers";
import { API_BASE_URL } from "./apiConfig";

export async function getCurrentUser(): Promise<User> {
  const cookieStore = await cookies();
  const res = await fetch(`${API_BASE_URL}/me`, {
    method: "GET",
    headers: {
      Cookie: cookieStore.toString(),
    },
    // credentials: "include",
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.error);

  return data;
}
