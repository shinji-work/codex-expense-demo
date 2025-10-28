/**
 * Tailwind CSS クラスの共通セットを管理するユーティリティ定数群です。
 * アプリ全体で一貫したスタイルを適用できるよう、ボタン・カード・入力要素に
 * 対応するクラス名をまとめています。
 */
export const cardClass = 'rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200';

/**
 * 強調された操作ボタンに適用する共通のTailwind CSSクラスセットです。
 */
export const primaryButtonClass =
  'inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white shadow transition hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2';

/**
 * 入力フィールドに適用するTailwind CSSの共通クラスセットです。
 */
export const inputClass =
  'w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300';

/**
 * ラベル要素を読みやすくするための共通Tailwind CSSクラスセットです。
 */
export const labelClass = 'text-sm font-semibold text-slate-700';
