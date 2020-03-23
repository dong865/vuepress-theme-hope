interface ExtendListItem {
  /**
   * 分享链接
   *
   * 以下字段会被自动替换：
   * @url url
   * @title title
   * @media media
   * @description description
   * @quote quote
   * @hashtags hashtags
   */
  sharUrl: string;
  /**
   * 分享类型
   *
   * 有两个可选值
   * - `'popup'`: 为分享行为打开一个新的窗口
   * - `'direct'`: 在本窗口打开分享行为
   */
  type: 'popup' | 'direct';
  /**
   * 分享图标
   *
   * 接受 svg 字符串或者一个 url 路径
   */
  icon?: string;
}
/** 分享选项 */
export interface ShareOption {
  /** 分享内容 */
  content: string[];
  /** 分享列表扩展 */
  extendShareList?: ExtendListItem[];
  /** 图标是否跟随主题色 */
  isPlain?: boolean;
  /** 默认封面 */
  fallbackImage: string;
  /** 是否自动设置页面引用为页面描述 */
  autoQuote: boolean;
  /** 标签 */
  tags?: string[];
  /** 微博 Key */
  weiboAppKey?: string;
  /** 推特用户名 */
  twitterUser?: string;
}

declare global {
  const SHARE_OPTION: ShareOption;
}
