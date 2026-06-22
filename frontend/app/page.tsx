import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Rails & Next.js Todo App</h1>
      <nav className="flex gap-4 mt-4">
        <Link
          href="/todos"
          className="font-semibold bg-[#27374D] text-sm text-[#DDE6ED] px-2 py-2 rounded hover:bg-[#526D82]"
        >
          Todos
        </Link>
        <Link
          href="/login"
          className="font-semibold bg-[#27374D] text-sm text-[#DDE6ED] px-2 py-2 rounded hover:bg-[#526D82]"
        >
          ログイン
        </Link>
        <Link
          href="/signup"
          className="font-semibold bg-[#27374D] text-sm text-[#DDE6ED] px-2 py-2 rounded hover:bg-[#526D82]"
        >
          新規登録
        </Link>
      </nav>
    </div>
  );
}

export default Page;
