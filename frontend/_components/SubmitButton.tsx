import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  type: "signup" | "login";
};

function SubmitButton({ type }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded bg-blue-600 p-2 text-white disabled:opacity-50"
    >
      {type === "signup" && (pending ? "登録中..." : "登録")}
      {type === "login" && (pending ? "ログイン中..." : "ログイン")}
    </button>
  );
}

export default SubmitButton;
