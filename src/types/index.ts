/** ピンの種別 */
export const PIN_TYPE = {
  /** 観光スポット */
  SPOT: "spot",
  /** グルメ */
  GOURMET: "gourmet",
  /** アクティビティ */
  ACTIVITY: "activity",
  /** イベント */
  EVENT: "event",
} as const;

/** ピンの種別の型 */
export type PinType = (typeof PIN_TYPE)[keyof typeof PIN_TYPE];

/** ピン情報 */
export type PinData = {
  /** 名前 */
  name: string;
  /**
   * ピンのタイプ
   * - JSONからインポートしたときstring型になってしまうので合わせている
   */
  type: string;
  /** 住所 */
  address?: string;
  /** 概要 */
  description: string;
  /** 動画ID */
  videoId: string;
  /** 動画タイトル */
  videoTitle: string;
  /** 動画の開始時間(秒) */
  videoStartTime?: number;
  /** URL */
  url: string;
};
