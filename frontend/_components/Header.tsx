"use client";

import { logout } from "@/_lib/sessionApi";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header({ name }: { name: string }) {
  const router = useRouter();

  async function handleLogout() {
    try {
      await logout();
      router.push("/");
    } catch {
      alert("ログアウトに失敗しました");
    }
  }

  return (
    <header className="border-b p-4">
      <div className="mx-auto flex items-center justify-between gap-5">
        <Link href="/" className="font-bold">
          Todo App
        </Link>

        <nav className="flex gap-5">
          <Link href="/todos" className="font-semibold">
            Todos
          </Link>
          <Link href="/login" className="font-semibold">
            ログイン
          </Link>
          <Link href="/signup" className="font-semibold">
            新規登録
          </Link>
          <button
            onClick={handleLogout}
            className="font-semibold cursor-pointer"
          >
            ログアウト
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
