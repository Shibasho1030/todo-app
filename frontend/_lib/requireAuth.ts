import { User } from "@/helper/types";
import { redirect } from "next/navigation";
import { getCurrentUser } from "./getUsersApi";

export async function requireAuth(): Promise<User> {
  try {
    return await getCurrentUser();
  } catch {
    redirect("/login");
  }
}
