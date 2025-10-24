import type { ReactElement } from 'react';

/**
 * 家計簿トラッカーのトップページを表示し、アプリの概要と次の操作を案内します。
 *
 * @returns {ReactElement} トップページのセクションを含むReact要素を返します。
 */
export default function Home(): ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 py-12">
      <section className="w-full max-w-3xl rounded-2xl bg-white p-10 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-900">支出・家計簿トラッカーへようこそ</h1>
        <p className="mt-4 leading-relaxed text-slate-700">
          このアプリケーションは、毎日の支出を記録し、家計の可視化をサポートするNext.jsプロジェクトです。
          ナビゲーションやダッシュボード、レポート機能などを追加することで、家計管理の効率化を目指せます。
        </p>
        <div className="mt-6 rounded-lg bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-800">次のステップ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>支出の登録フォームや履歴一覧ページを作成しましょう。</li>
            <li>カテゴリ別の分析グラフや月次レポートを追加すると便利です。</li>
            <li>家族と共有できるように認証・権限管理を組み込むことも検討してください。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
