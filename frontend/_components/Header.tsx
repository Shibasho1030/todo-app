"use client";

import { logout } from "@/_lib/sessionApi";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header({ name }: { name: string | undefined }) {
  const router = useRouter();

  async function handleLogout() {
    try {
      await logout();
      router.push("/");
      router.refresh();
    } catch {
      alert("ログアウトに失敗しました");
    }
  }

  return (
    <header className="border-b p-4">
      <div className="mx-auto flex items-center justify-between gap-5">
        <div className="flex gap-4 font-bold">
          <Link href="/" className="font-bold text-xl">
            Todo App
          </Link>
          {name ? (
            <p className="flex items-end text-xs">{name}さんでログイン中</p>
          ) : (
            ""
          )}
        </div>

        <nav className="flex gap-5">
          {name ? (
            <Link href="/todos" className="font-semibold">
              Todos
            </Link>
          ) : (
            ""
          )}
          {name ? (
            ""
          ) : (
            <Link href="/login" className="font-semibold">
              ログイン
            </Link>
          )}
          {name ? (
            ""
          ) : (
            <Link href="/signup" className="font-semibold">
              新規登録
            </Link>
          )}
          {name ? (
            <button
              onClick={handleLogout}
              className="font-semibold cursor-pointer"
            >
              ログアウト
            </button>
          ) : (
            ""
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
