import { Context, PluginOptionAPI } from 'vuepress-types';
import { ShareOption } from '../types';
import { resolve } from 'path';

export = (options: ShareOption, { themeConfig }: Context): PluginOptionAPI => {
  /** 默认配置 */
  const defaultShareConfig: ShareOption = {
    content: ['qq', 'weibo'],
    fallbackImage: '/logo.png',
    autoQuote: true
  };

  /** 分享配置 */
  const shareOption = options
    ? { ...defaultShareConfig, ...options }
    : themeConfig.share
    ? { ...defaultShareConfig, ...themeConfig.share }
    : defaultShareConfig;

  const config: PluginOptionAPI = {
    name: 'share',

    define: {
      SHARE_OPTION: shareOption
    } as Record<string, any>,

    enhanceAppFiles: resolve(__dirname, './enhanceAppFile.ts'),

    globalUIComponents: 'ShareCtn'
  };

  return config;
};
