import { useMemo, useState } from 'react';
import type { ChangeEvent, FormEvent, ReactElement } from 'react';
import { inputClass, labelClass, primaryButtonClass, cardClass } from './sharedStyles';
import type { Expense } from './ExpenseList';

/**
 * 新しい支出レコードの作成に必要なプロパティを表す型です。
 */
export type ExpenseDraft = Pick<Expense, 'date' | 'category' | 'amount' | 'memo'>;

/**
 * `AddExpenseForm` コンポーネントに渡すプロパティの型です。
 */
export type AddExpenseFormProps = {
  /** フォームのカテゴリ選択肢として表示するラベル一覧です。 */
  categories: string[];
  /**
   * 入力された支出データを親コンポーネントへ渡すコールバック関数です。
   *
   * @param {ExpenseDraft} draft - 入力された支出データの草案です。
   */
  onAddExpense: (draft: ExpenseDraft) => void;
};

/**
 * 支出入力フォームを描画し、入力値を管理して送信イベントで親へ通知します。
 *
 * @param {AddExpenseFormProps} props - フォーム描画に必要なプロパティです。
 * @param {string[]} props.categories - ユーザーが選択できるカテゴリの一覧です。
 * @param {(draft: ExpenseDraft) => void} props.onAddExpense - 送信された支出データを処理する関数です。
 * @returns {ReactElement} 支出追加フォームを含むReact要素を返します。
 */
export default function AddExpenseForm({ categories, onAddExpense }: AddExpenseFormProps): ReactElement {
  const defaultCategory = useMemo(() => categories[0] ?? '未分類', [categories]);
  const [formValues, setFormValues] = useState<ExpenseDraft>({
    date: new Date().toISOString().slice(0, 10),
    category: defaultCategory,
    amount: 0,
    memo: ''
  });

  /**
   * 入力フィールドの変更を受け取り、フォームの状態を更新します。
   *
   * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} event - 入力イベントです。
   */
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: name === 'amount' ? Number(value) || 0 : value
    }));
  };

  /**
   * フォームの送信イベントを処理し、入力値を親コンポーネントに引き渡します。
   *
   * @param {FormEvent<HTMLFormElement>} event - フォーム送信イベントです。
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onAddExpense(formValues);
    setFormValues({
      date: new Date().toISOString().slice(0, 10),
      category: defaultCategory,
      amount: 0,
      memo: ''
    });
  };

  return (
    <section className={`${cardClass} order-first sm:order-none`}>
      <h2 className="text-xl font-semibold text-slate-900">支出を追加</h2>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="date">
            日付
          </label>
          <input
            className={inputClass}
            id="date"
            name="date"
            type="date"
            value={formValues.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="category">
            カテゴリ
          </label>
          <select
            className={inputClass}
            id="category"
            name="category"
            value={formValues.category}
            onChange={handleChange}
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="amount">
            金額 (円)
          </label>
          <input
            className={inputClass}
            id="amount"
            name="amount"
            type="number"
            min="0"
            step="1"
            value={formValues.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="memo">
            メモ
          </label>
          <textarea
            className={`${inputClass} h-24 resize-none`}
            id="memo"
            name="memo"
            value={formValues.memo}
            onChange={handleChange}
            placeholder="昼食、交通費などの詳細を記入してください"
          />
        </div>
        <button className={primaryButtonClass} type="submit">
          追加する
        </button>
      </form>
    </section>
  );
}
