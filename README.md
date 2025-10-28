# Codex Expense Demo

Codex Expense Demo は、Next.js・TypeScript・Tailwind CSS を用いて構築した家計簿管理アプリケーションのデモプロジェクトです。支出の一覧表示や追加フォームを備えたベース実装を提供し、将来的なダッシュボードや分析機能の拡張に利用できます。

## 主な機能

- 支出一覧と追加フォームの初期画面を実装
- ダミーデータ（日時／カテゴリ／金額／メモ）の表示
- フォームから追加した支出をローカルストレージに保存し、ページリロード後も保持
- Tailwind CSS によるレスポンシブな UI レイアウト

## セットアップ手順

### 1. 必要条件

- Node.js 18 以上
- npm 9 以上（または互換のパッケージマネージャー）

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数ファイルの作成

プロジェクトルートにある `env.example` を `.env.local` にコピーし、必要に応じて値を更新します。

```bash
cp env.example .env.local
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:5000](http://localhost:5000) を開き、トップページ（`/`）に表示される支出一覧とフォームを確認してください。

## 環境変数

`env.example` にはデータベース接続に必要なホスト名やポート、認証情報、そしてフロントエンドのドメインを指定する `NEXT_PUBLIC_WEB_DOMAIN` を含めています。プロジェクトの用途に合わせて値を更新し、`.env.local` などの環境変数ファイルで利用してください。

- `DATABASE_HOST` / `DATABASE_PORT` : 接続先データベースのホスト名とポート番号です。
- `DATABASE_USER` / `DATABASE_PASSWORD` : データベースへ接続する際に使用する認証情報です。
- `DATABASE_NAME` : アプリケーションが利用するデータベース名です。
- `NEXT_PUBLIC_WEB_DOMAIN` : フロントエンドの公開ドメインを指定します。ローカル開発では `http://localhost:5000` を設定してください。

## プロジェクト構成

```
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── AddExpenseForm.tsx
│   ├── ExpenseList.tsx
│   └── sharedStyles.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## npm スクリプト

- `npm run dev` : 開発サーバーをポート 5000 で起動します。
- `npm run build` : 本番ビルドを作成します。
- `npm run start` : ビルド済みアプリケーションをポート 5000 で起動します。
- `npm run lint` : ESLint でコード品質をチェックします。
- `npm run format` : Prettier でコードスタイルを確認します。
- `npm run format:write` : Prettier でコードを自動整形します。

## 開発ガイドライン

- すべての公開関数・コンポーネントには JSDoc 形式のドキュメンテーションコメントを記載します。
- Tailwind CSS の共通クラスは `components/sharedStyles.ts` に定義し、コンポーネント間で再利用します。
- 新たな機能を追加する際は、フォームのバリデーションやアクセシビリティも考慮してください。

## ライセンス

必要に応じてライセンス情報をここに追記してください。
