export interface WeiboHotSearchDataHotgovsItem {
  icon_desc: string;
  icon_desc_color: string;
  small_icon_desc: string;
  small_icon_desc_color: string;
  name: string;
  pos: number;
  flag: number;
  topic_flag: number;
  icon_width: number;
  icon_height: number;
  word: string;
  icon: string;
}

export interface WeiboHotSearchDataHotgov {
  stime: number;
  icon_desc: string;
  icon_desc_color: string;
  small_icon_desc: string;
  small_icon_desc_color: string;
  name: string;
  pos: number;
  flag: number;
  topic_flag: number;
  icon_width: number;
  icon_height: number;
  mid: string;
  note: string;
  url: string;
  word: string;
  icon: string;
  is_hot: number;
  is_gov: number;
}

export interface WeiboHotSearchDataRealtimeItem {
  icon_width: number;
  icon_desc: string;
  flag: number;
  icon_desc_color: string;
  note: string;
  small_icon_desc: string;
  small_icon_desc_color: string;
  emoticon: string;
  word_scheme?: string;
  realpos: number;
  topic_flag: number;
  word: string;
  label_name: string;
  icon: string;
  num: number;
  icon_height: number;
  rank: number;
}

export interface WeiboHotSearchData {
  hotgovs: WeiboHotSearchDataHotgovsItem[];
  hotgov: WeiboHotSearchDataHotgov;
  realtime: WeiboHotSearchDataRealtimeItem[];
}

export interface WeiboHotSearchLog {
  act_code: number;
  ext: string;
}

export interface WeiboHotSearchResponse {
  ok: number;
  data: WeiboHotSearchData;
  logs: WeiboHotSearchLog,
  topLogs: WeiboHotSearchLog,
}
