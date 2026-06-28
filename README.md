# Todo App

Rails API + Next.js で構築した Todo 管理アプリケーションです。

ユーザー認証に対応しており、ログインしたユーザーごとに Todo を作成・編集・削除できます。
フロントエンドとバックエンドを別ドメインでデプロイし、Next.js の Route Handlers を経由してセッション Cookie 認証を行っています。

---

## デモ URL

https://todo-app-shiba1.vercel.app

---

## 学習教材

本アプリの開発にあたり、以下の教材を参考にしました。

### 書籍

- React
  - [改訂新版 これからはじめるReact実践入門](https://www.amazon.co.jp/dp/4815635943)

- Rails
  - [パーフェクト Ruby on Rails 【増補改訂版】](https://www.amazon.co.jp/dp/4297114623)

### 電子書籍・動画

- Rails
  - [Ruby on Rails チュートリアル](https://railstutorial.jp/chapters/beginning?version=7.0#cha-beginning)

### 動画教材

- React
  - [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/)

- JavaScript
  - [The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/)

- HTML / CSS
  - [Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/)

- TypeScript
  - [TypeScript Complete Course](https://www.udemy.com/course/typescript-complete/)

### その他

- Rails
  - [Progate Rails コース](https://prog-8.com/courses/rails5)

---

## アプリ要件

- ユーザーは新規登録できる
- 登録済みユーザーはログインできる
- ログイン中のユーザーはログアウトできる
- ログイン中のユーザーのみTODOをCRUDできる
- ユーザーは自分が作成したTODOのみ閲覧・編集・削除できる
- TODOを複数件登録できる
- TODOは以下の情報を持つ
  - 内容
  - 完了 / 未完了フラグ
  - 予定日
  - 作成日時
  - 更新日時
- 内容は全角100文字以内とする
- 作成日時・更新日時はプログラム側で自動付与する
- TODOはCRUDできる
- TODOデータはデータベースに保存し永続化できる
- TODOは「全件」「未完了のみ」「完了のみ」で絞り込みできる
- 削除は論理削除ではなく、物理削除とする

---

## Todo の項目

各 Todo は以下の情報を持ちます。

| 項目     | 内容            |
| -------- | --------------- |
| タイトル | Todo のタイトル |
| 本文     | Todo の詳細内容 |
| 予定日   | Todo の予定日   |
| 完了状態 | 完了 / 未完了   |
| 作成日時 | Todo の作成日時 |
| 更新日時 | Todo の更新日時 |

## User の項目

各 User は以下の情報を持ちます。

| 項目            | 内容                                       |
| --------------- | ------------------------------------------ |
| 名前            | ユーザーの表示名                           |
| メールアドレス  | ログイン時に使用するメールアドレス         |
| password_digest | パスワードをbcryptによりハッシュ化したもの |
| 作成日時        | User の作成日時                            |
| 更新日時        | User の更新日時                            |

---

---

## 技術スタック

| カテゴリ                   | 技術                             |
| -------------------------- | -------------------------------- |
| フロントエンド             | Next.js 16, React 19, TypeScript |
| スタイリング               | Tailwind CSS                     |
| バックエンド               | Ruby on Rails 8.1 API モード     |
| データベース               | PostgreSQL                       |
| 認証                       | セッション Cookie                |
| フロントエンドホスティング | Vercel                           |
| バックエンドホスティング   | Render                           |

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

ログイン、新規登録、ログアウトは以下の流れで処理しています。

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

作成した API エンドポイントは以下です。

| メソッド | エンドポイント      | 内容                   |
| -------- | ------------------- | ---------------------- |
| POST     | `/api/v1/users`     | ユーザー新規登録       |
| POST     | `/api/v1/session`   | ログイン               |
| DELETE   | `/api/v1/session`   | ログアウト             |
| GET      | `/api/v1/me`        | ログイン中ユーザー取得 |
| DELETE   | `/api/v1/me`        | アカウント削除         |
| GET      | `/api/v1/todos`     | Todo 一覧取得          |
| GET      | `/api/v1/todos/:id` | Todo 詳細取得          |
| POST     | `/api/v1/todos`     | Todo 作成              |
| PATCH    | `/api/v1/todos/:id` | Todo 更新              |
| DELETE   | `/api/v1/todos/:id` | Todo 削除              |

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

- Todo の並び替え機能
- バリデーションエラーの表示改善
- アカウント削除機能
- レスポンシブデザインの調整
- テストコードの追加

---
