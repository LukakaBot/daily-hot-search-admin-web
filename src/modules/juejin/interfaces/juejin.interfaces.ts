export interface JuejinArticleRankContent {
  /** 内容id */
  content_id: string;
  /** 文章类型 */
  item_type: number;
  /** 未知 */
  format: string;
  /** 作者用户id */
  author_id: string;
  /** 文章标题 */
  title: string;
  /** 文章描述 */
  brief: string;
  /** 状态 */
  status: number;
  /** 创建时间 */
  ctime: number;
  /** 修改时间 */
  mtime: number;
  /** 分类id */
  category_id: string;
  /** 文章标签id */
  tag_ids: string[];
}

export interface JuejinArticleRankContentCounter {
  /** 浏览数量 */
  view: number;
  /** 点赞数 */
  like: number;
  /** 收藏数 */
  collect: number;
  /** 热度 */
  hot_rank: number;
  /** 评论数 */
  comment_count: number;
  /** 互动数 */
  interact_count: number;
}

export interface JuejinArticleRankAuthor {
  /** 用户id */
  user_id: string;
  /** 用户名 */
  name: string;
  /** 用户头像 */
  avatar: string;
  /** 是否关注 */
  is_followed: boolean;
}

export interface JuejinArticleRankAuthorCounter {
  /** 用户等级 */
  level: number;
  /** 掘力值 */
  power: number;
  /** 粉丝数 */
  follower: number;
  /** 关注数量 */
  followee: number;
  /** 未知 */
  publish: number;
  /** 未知 */
  view: number;
  /** 未知 */
  like: number;
  /** 未知 */
  hot_rank: number;
}

export interface JuejinArticleRankUserInteract {
  /** 是否点赞 */
  is_user_like: boolean;
  /** 是否收藏 */
  is_user_collect: boolean;
  /** 是否关注 */
  is_follow: boolean;
}

export interface JuejinArticleRankData {
  /** 文章信息 */
  content: JuejinArticleRankContent;
  /** 文章信息统计数据 */
  content_counter: JuejinArticleRankContentCounter;
  /** 作者信息 */
  author: JuejinArticleRankAuthor;
  /** 作者信息统计数据 */
  author_counter: JuejinArticleRankAuthorCounter;
  /** 用户关注类型 */
  user_interact: JuejinArticleRankUserInteract;
}

export interface JuejinApiResponse<T = any> {
  /** 响应码 */
  err_no: number;
  /** 响应消息 */
  err_msg: string;
  /** 响应内容 */
  data: T;
}