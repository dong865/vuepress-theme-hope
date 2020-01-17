import { Context, PluginOptionAPI } from 'vuepress-types';
import { ShareOption } from './globals';
import { deepAssign } from '@mr-hope/vuepress-shared-utils';
import { resolve } from 'path';

export = (options: ShareOption, { themeConfig }: Context): PluginOptionAPI => {
  /** 默认配置 */
  const defaultShareConfig: ShareOption = {
    content: ['qq', 'weibo'],
    fallbackImage: '/logo.png',
    autoQuote: true
  };

  console.log(options);

  /** 分享配置 */
  const shareOption = options
    ? deepAssign(defaultShareConfig, options)
    : themeConfig.share
    ? deepAssign(defaultShareConfig, themeConfig.share)
    : defaultShareConfig;

  const config: PluginOptionAPI = {
    name: 'share',

    define: {
      SHARE_OPTION: shareOption
    } as Record<string, any>,

    enhanceAppFiles: resolve(__dirname, './enhanceAppFile.ts'),

    /** Typescript Support */
    chainWebpack: chainWebpackConfig => {
      chainWebpackConfig.resolve.extensions.add('.ts');

      chainWebpackConfig.module
        .rule('ts')
        .test(/\.ts$/u)
        .use('ts-loader')
        .loader('ts-loader')
        .options({
          appendTsSuffixTo: [/\.vue$/u],
          compilerOptions: {
            declaration: false
          }
        });
    },

    globalUIComponents: 'ShareCtn'
  };

  return config;
};
