import { useEffect, useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import AddExpenseForm, { type ExpenseDraft } from '../components/AddExpenseForm';
import ExpenseList, { type Expense } from '../components/ExpenseList';

const STORAGE_KEY = 'codex-expense-demo:expenses';

const defaultExpenses: Expense[] = [
  {
    id: 'exp-001',
    date: '2024-05-01',
    category: '食費',
    amount: 1200,
    memo: 'ランチセット'
  },
  {
    id: 'exp-002',
    date: '2024-05-02',
    category: '交通費',
    amount: 500,
    memo: '電車往復'
  },
  {
    id: 'exp-003',
    date: '2024-05-03',
    category: '趣味・娯楽',
    amount: 3200,
    memo: '映画鑑賞'
  }
];

/**
 * ローカルストレージから支出情報を読み出します。利用できない場合はデフォルトの支出を返します。
 *
 * @returns {Expense[]} 保存済みの支出一覧、またはダミーデータを返します。
 */
function loadExpenses(): Expense[] {
  if (typeof window === 'undefined') {
    return defaultExpenses;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return defaultExpenses;
    }
    const parsed: Expense[] = JSON.parse(stored) as Expense[];
    if (!Array.isArray(parsed) || parsed.some((expense) => expense == null)) {
      return defaultExpenses;
    }
    return parsed;
  } catch (error) {
    console.error('支出データの読み込みに失敗しました。', error);
    return defaultExpenses;
  }
}

/**
 * 支出一覧ページを表示し、ローカルストレージ連携と追加フォームを提供します。
 *
 * @returns {ReactElement} 支出一覧と追加フォームを含むReact要素を返します。
 */
export default function ExpenseDashboardPage(): ReactElement {
  const [expenses, setExpenses] = useState<Expense[]>(() => loadExpenses());

  useEffect(() => {
    setExpenses(loadExpenses());
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (error) {
      console.error('支出データの保存に失敗しました。', error);
    }
  }, [expenses]);

  const categories = useMemo(() => ['食費', '交通費', '日用品', '趣味・娯楽', '光熱費'], []);

  /**
   * 支出追加フォームから受け取った草案をID付きのレコードに変換し、状態へ追加します。
   *
   * @param {ExpenseDraft} draft - 追加された支出データの草案です。
   */
  const handleAddExpense = (draft: ExpenseDraft): void => {
    setExpenses((prev) => [
      {
        id: `exp-${Date.now()}`,
        ...draft
      },
      ...prev
    ]);
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row">
        <div className="sm:w-2/5">
          <AddExpenseForm categories={categories} onAddExpense={handleAddExpense} />
        </div>
        <div className="sm:w-3/5">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </main>
  );
}
