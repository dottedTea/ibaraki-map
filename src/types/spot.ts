/** 観光スポット情報 */
export type Spot = {
  /** 名前 */
  name: string;
  /** 市区町村 */
  municipality: string;
  /** 動画ID */
  videoId: string;
  /** 動画の開始時間(秒) */
  videoStartTime?: number;
};
