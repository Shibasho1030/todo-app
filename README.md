# Todo App

Rails API + Next.js で構築した Todo 管理アプリケーションです。

ユーザー認証に対応しており、ログインしたユーザーごとに Todo を作成・編集・削除できます。
フロントエンドとバックエンドを別ドメインでデプロイし、Next.js の Route Handlers を経由してセッション Cookie 認証を行っています。

---

## デモ URL

| 環境         | URL                                    |
| ---------- | -------------------------------------- |
| フロントエンド    | https://todo-app-shiba1.vercel.app     |
| バックエンド API | https://todo-app-api-y253.onrender.com |

---

## 主な機能

* ユーザー新規登録
* ログイン / ログアウト
* ログイン中ユーザーの取得
* Todo 一覧表示
* Todo 詳細表示
* Todo 作成
* Todo 編集
* Todo 削除
* 完了 / 未完了の切り替え
* 完了状態によるフィルタリング

  * すべて
  * 完了
  * 未完了

---

## Todo の項目

各 Todo は以下の情報を持ちます。

| 項目   | 内容         |
| ---- | ---------- |
| タイトル | Todo のタイトル |
| 本文   | Todo の詳細内容 |
| 予定日  | Todo の予定日   |
| 完了状態 | 完了 / 未完了   |
| 作成日時 | Todo の作成日時 |
| 更新日時 | Todo の更新日時 |

---

## 技術スタック

| カテゴリ          | 技術                               |
| ------------- | -------------------------------- |
| フロントエンド       | Next.js 16, React 19, TypeScript |
| スタイリング        | Tailwind CSS                     |
| バックエンド        | Ruby on Rails 8.1 API モード        |
| データベース        | PostgreSQL                       |
| 認証            | セッション Cookie                     |
| フロントエンドホスティング | Vercel                           |
| バックエンドホスティング  | Render                           |

---

## システム構成

このアプリケーションは、フロントエンドとバックエンドを分離した構成です。

```txt
Browser
  ↓
Next.js Frontend / Route Handlers
  ↓
Rails API
  ↓
PostgreSQL
```

### フロントエンド

Next.js App Router を使用しています。

ログイン、新規登録、ログアウトなどの認証処理は、ブラウザから直接 Rails API を叩くのではなく、Next.js の Route Handlers を経由しています。

これにより、別ドメイン間で発生する Cookie の扱いを Next.js 側で制御しやすくしています。

### バックエンド

Rails は API モードで構築しています。

セッション Cookie を用いてログイン状態を管理し、ログイン中のユーザーに紐づく Todo のみを操作できるようにしています。

---

## 認証の仕組み

本アプリでは JWT ではなく、Rails のセッション Cookie を使用して認証しています。

### ログイン / 新規登録 / ログアウト

ログイン、新規登録、ログアウトは以下の流れで処理されます。

```txt
Browser
  ↓
Next.js Route Handler
  ↓
Rails API
  ↓
Next.js Route Handler
  ↓
Browser
```

Rails API から返された `Set-Cookie` ヘッダーを Next.js 側で受け取り、ブラウザに Cookie を保存します。

これにより、Vercel 上のフロントエンドからでもログイン状態を維持できるようにしています。

### Todo 操作

Todo の取得、作成、更新、削除は Next.js の Server Component / Server Action から Rails API にリクエストしています。

```txt
Next.js Server Component / Server Action
  ↓
Rails API
```

ブラウザから直接 Rails API を叩かず、Next.js サーバー側で Cookie を付与して通信する構成にしています。

---

## API エンドポイント

主な API エンドポイントは以下です。

| メソッド   | エンドポイント             | 内容          |
| ------ | ------------------- | ----------- |
| POST   | `/api/v1/users`     | ユーザー新規登録    |
| POST   | `/api/v1/session`   | ログイン        |
| DELETE | `/api/v1/session`   | ログアウト       |
| GET    | `/api/v1/me`        | ログイン中ユーザー取得 |
| DELETE | `/api/v1/me`        | アカウント削除     |
| GET    | `/api/v1/todos`     | Todo 一覧取得   |
| GET    | `/api/v1/todos/:id` | Todo 詳細取得   |
| POST   | `/api/v1/todos`     | Todo 作成     |
| PATCH  | `/api/v1/todos/:id` | Todo 更新     |
| DELETE | `/api/v1/todos/:id` | Todo 削除     |

---

## 工夫した点

### 1. セッション Cookie 認証に対応

フロントエンドとバックエンドが別ドメインで動作する構成のため、Cookie の扱いを考慮して実装しました。

認証系のリクエストは Next.js の Route Handlers を経由させ、Rails API から返された Cookie をフロントエンド側のドメインで扱えるようにしています。

### 2. ログインユーザーごとの Todo 管理

Todo はログイン中のユーザーに紐づけて管理しています。

バックエンド側では `current_user.todos` を基準に Todo を取得・作成・更新・削除しているため、他のユーザーの Todo を操作できないようにしています。

### 3. Server Component / Server Action の活用

Todo 一覧や詳細画面では Server Component を使用し、フォーム送信処理では Server Action を使用しています。

Next.js App Router の機能を活用し、できるだけサーバー側でデータ取得・更新を行う構成にしました。

### 4. 完了状態によるフィルタリング

URL のクエリパラメータを使用して、Todo の表示条件を切り替えています。

```txt
/todos?completed=all
/todos?completed=true
/todos?completed=false
```

これにより、フィルタ状態を URL として保持できるようにしています。

---

## 今後の改善案

* バリデーションエラーの表示改善
* ローディング UI の改善
* テストコードの追加
* レスポンシブデザインの調整
* Todo の並び替え機能
* 期限切れ Todo の強調表示
* アカウント削除機能の UI 追加

---

