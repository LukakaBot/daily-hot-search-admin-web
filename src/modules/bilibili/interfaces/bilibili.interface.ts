export interface BilibiliWbiImg {
  img_url: string;
  sub_url: string;
}

export interface BilibiliUserNavData {
  isLogin: boolean;
  wbi_img: BilibiliWbiImg;
}

export interface BilibiliApiResponse {
  code: number;
  message: string;
  ttl: number;
  data: BilibiliUserNavData;
}

