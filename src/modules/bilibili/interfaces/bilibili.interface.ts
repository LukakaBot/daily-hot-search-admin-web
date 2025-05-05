export interface BilibiliWbiImg {
  img_url: string;
  sub_url: string;
}

export interface BilibiliUserNavData {
  isLogin: boolean;
  wbi_img: BilibiliWbiImg;
}

export interface BilibiliVideoRankRights {
  bp: number;
  elec: number;
  download: number;
  movie: number;
  pay: number;
  hd5: number;
  no_reprint: number;
  autoplay: number;
  ugc_pay: number;
  is_cooperation: number;
  ugc_pay_preview: number;
  no_background: number;
  arc_pay: number;
  pay_free_watch: number;
}

export interface BilibiliVideoRankOwner {
  mid: number;
  name: string;
  face: string;
}

export interface BilibiliVideoRankStat {
  aid: number;
  view: number;
  danmaku: number;
  reply: number;
  favorite: number;
  coin: number;
  share: number;
  now_rank: number;
  his_rank: number;
  like: number;
  dislike: number;
  vt: number;
  vv: number;
  fav_g: number;
  like_g: number;
}

export interface BilibiliVideoRankDimension {
  width: number;
  height: number;
  rotate: number;
}

export interface BilibiliVideoRank {
  id: number;
  aid: number;
  videos: number;
  tid: number;
  tname: string;
  copyright: number;
  pic: string;
  title: string;
  pubdate: number;
  ctime: number;
  desc: string;
  state: number;
  duration: number;
  mission_id: number;
  rights: BilibiliVideoRankRights;
  owner: BilibiliVideoRankOwner;
  stat: BilibiliVideoRankStat;
  dynamic: string;
  cid: number;
  dimension: BilibiliVideoRankDimension;
  season_id: number;
  short_link_v2: string;
  first_frame: string;
  pub_location: string;
  cover43: string;
  tidv2: number;
  tnamev2: string;
  pid_v2: number;
  pid_name_v2: string;
  bvid: string;
  score: number;
  enable_vt: number;
}

export interface BilibiliVideoRankData {
  note: string;
  list: BilibiliVideoRank[];
}

export interface BilibiliApiResponse<T = any> {
  code: number;
  message: string;
  ttl: number;
  data: T;
}
