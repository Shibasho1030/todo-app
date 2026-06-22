"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold mt-4">問題が発生しました！</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-[#27374D] text-[#DDE6ED] text-sm px-3 py-2 rounded hover:bg-[#526D82]"
        onClick={reset}
      >
        再読み込み
      </button>
    </main>
  );
}

export default Error;
