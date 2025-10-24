import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Codex Expense Demo',
  description: '支出・家計簿トラッカー用のNext.jsデモアプリケーションです。'
};

/**
 * アプリケーション全体のHTML骨組みを生成し、グローバルスタイルを適用します。
 *
 * @param {object} props - レイアウトに渡されるプロパティです。
 * @param {ReactNode} props.children - ページごとのコンテンツ要素です。
 * @returns {ReactNode} HTML構造と子要素を含むルートレイアウトを返します。
 */
export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
