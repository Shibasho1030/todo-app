"use client";

import { login } from "@/_lib/sessionApi";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    await login({ email, password });
    setPending(false);
    router.push("/todos");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md p-6 ">
      <h1 className="mb-6 text-2xl font-bold">ユーザー登録</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="メールアドレス"
          defaultValue="guest@example.com"
          className="w-full rounded border p-2"
        />

        <input
          name="password"
          type="password"
          placeholder="パスワード"
          defaultValue="hogehoge"
          className="w-full rounded border p-2"
        />

        <SubmitButton type="login" pending={pending} />
      </form>
    </div>
  );
}

export default LoginForm;
