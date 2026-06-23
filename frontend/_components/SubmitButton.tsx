"use client";

type SubmitButtonProps = {
  type: "signup" | "login";
  pending: boolean;
};

function SubmitButton({ type, pending }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={`rounded bg-[#27374D] p-2 text-[#DDE6ED] ${type === "signup" ? "px-3" : ""}`}
    >
      {type === "signup" && (pending ? "登録中..." : "登録")}
      {type === "login" && (pending ? "ログイン中..." : "ログイン")}
    </button>
  );
}

export default SubmitButton;
