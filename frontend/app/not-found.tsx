import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">ページが見つかりません</h1>
      <Link href="/" className="inline-block px-6 py-3 text-lg">
        トップページに戻る
      </Link>
    </main>
  );
}

export default NotFound;
