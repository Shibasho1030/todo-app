"use client";

import { login } from "@/_lib/sessionApi";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

function LoginForm() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    await login({ email, password });
    router.push("/todos");
  }

  return (
    <div className="mx-auto max-w-md p-6 ">
      <h1 className="mb-6 text-2xl font-bold">ユーザー登録</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="メールアドレス"
          className="w-full rounded border p-2"
        />

        <input
          name="password"
          type="password"
          placeholder="パスワード"
          className="w-full rounded border p-2"
        />

        <SubmitButton type="login" />
      </form>
    </div>
  );
}

export default LoginForm;

/*
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/_lib/sessionApi";
import SubmitButton from "./SubmitButton";

function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    try {
      await login({ email, password });
      router.push("/todos");
      router.refresh();
    } catch (error) {
      setError("ログインに失敗しました");
    }
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-bold">ログイン</h1>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="メールアドレス"
          className="w-full rounded border p-2"
        />

        <input
          name="password"
          type="password"
          placeholder="パスワード"
          className="w-full rounded border p-2"
        />

        <SubmitButton type="login" />
      </form>
    </div>
  );
}

export default LoginForm;
*/
