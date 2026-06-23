"use client";

import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";
import { signup } from "@/_lib/usersApi";
import { FormEvent, useState } from "react";

function Page() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("email"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const passwordConfirmation = String(formData.get("passwordConfirmation"));

    await signup({ name, email, password, passwordConfirmation });

    setPending(false);
    router.push("/todos");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md p-6 ">
      <h1 className="mb-6 text-2xl font-bold">ユーザー登録</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="名前"
          className="w-full rounded border p-2"
        />

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

        <input
          name="passwordConfirmation"
          type="password"
          placeholder="パスワード確認"
          className="w-full rounded border p-2"
        />

        <SubmitButton type="signup" pending={pending} />
      </form>
    </div>
  );
}

export default Page;
