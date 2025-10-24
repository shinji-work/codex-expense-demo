# Codex Expense Demo

このリポジトリは支出・家計簿トラッカーのNext.jsプロジェクトです。セットアップ手順を記載してください。

## プロジェクトの目的

このプロジェクトは、Next.js・TypeScript・Tailwind CSS を用いたモダンな家計簿管理アプリケーションのベース環境です。支出の記録、カテゴリ別の分析、家族との共有など、家計管理に必要な機能を柔軟に拡張できるよう設計されています。

## 必要条件

- Node.js 18 以上
- npm 9 以上（または互換のパッケージマネージャー）

## セットアップ手順

1. 依存関係をインストールします。
   ```bash
   npm install
   ```
2. 開発サーバーを起動します。
   ```bash
   npm run dev
   ```
3. ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、トップページを確認できます。

## npm スクリプト

- `npm run dev` : 開発サーバーを起動します。
- `npm run build` : 本番ビルドを作成します。
- `npm run start` : ビルド済みアプリケーションを起動します。
- `npm run lint` : ESLint でコード品質をチェックします。
- `npm run format` : Prettier でコードの整形を確認します。
- `npm run format:write` : Prettier でコードを自動整形します。

## 開発ガイド

- Tailwind CSS を利用してスタイルを定義しています。`app/globals.css` に共通スタイルを追加してください。
- すべてのコンポーネントや関数には、JSDoc 形式の日本語ドキュメンテーションコメントを追加してください。
- ESLint と Prettier の設定を変更する場合は、チームに共有のうえ `.eslintrc.js` と `.prettierrc.json` を更新してください。

## ディレクトリ構成

```
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## ライセンス

必要に応じてライセンス情報をここに追記してください。
