import type { ReactElement } from 'react';
import { cardClass } from './sharedStyles';

/**
 * 支出情報のレコードを表す型です。
 */
export type Expense = {
  /** 一意に支出を識別するIDです。 */
  id: string;
  /** 支出の日付 (YYYY-MM-DD) を表す文字列です。 */
  date: string;
  /** 支出のカテゴリ名です。 */
  category: string;
  /** 支出額を表す数値です。 */
  amount: number;
  /** 支出に関する補足メモです。 */
  memo: string;
};

/**
 * `ExpenseList` コンポーネントに渡すプロパティを定義した型です。
 */
export type ExpenseListProps = {
  /** 表示対象となる支出レコードの配列です。 */
  expenses: Expense[];
};

/**
 * 支出レコードの配列を受け取り、カード内のテーブルとして一覧表示します。
 *
 * @param {ExpenseListProps} props - 支出一覧表示に必要なプロパティです。
 * @param {Expense[]} props.expenses - テーブルに描画する支出レコードの集合です。
 * @returns {ReactElement} 支出一覧テーブルを含むReact要素を返します。
 */
export default function ExpenseList({ expenses }: ExpenseListProps): ReactElement {
  return (
    <section className={cardClass}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-slate-900">支出一覧</h2>
        <p className="text-sm text-slate-500">全 {expenses.length} 件</p>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-medium">日付</th>
              <th className="px-4 py-3 font-medium">カテゴリ</th>
              <th className="px-4 py-3 font-medium text-right">金額 (円)</th>
              <th className="px-4 py-3 font-medium">メモ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">{expense.date}</td>
                <td className="px-4 py-3">{expense.category}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">
                  {expense.amount.toLocaleString('ja-JP')}
                </td>
                <td className="px-4 py-3 text-slate-600">{expense.memo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
