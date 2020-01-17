/*
 * @Author: Mr.Hope
 * @Date: 2019-07-05 00:14:26
 * @LastEditors  : Mr.Hope
 * @LastEditTime : 2020-01-14 16:16:36
 * @Description: Vuepress配置
 */

const resolve = require('vuepress-theme-hope/resolve');

module.exports = resolve({
  /** 网站标题 */
  title: 'vuepress-plugin-share',

  /** 网站在该语言下的描述 */
  description: 'Vuepress 的分享插件',

  /** 生成网站头部的标签 */
  head: [
    // pwa相关
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#46bd87' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['link', { rel: 'apple-touch-icon', href: '/img/icon/appleIcon152.png' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#46bd87'
      }
    ],
    [
      'meta',
      { name: 'msapplication-TileImage', content: '/img/icon/msIcon144.png' }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],

  /** 构建文件输出目录 */
  dest: './dist',

  /** 多语言配置选项
   *
   * 键名是该语言所属的子路径
   * 作为特例，默认语言可以使用 '/' 作为其路径。
   */
  locales: {
    /** 英文设置 */
    '/en/': {
      /** 网站在该语言下的标题 */
      title: 'vuepress-plugin-share',

      /** 网站在该语言下的描述 */
      description: 'Share Plugin for Vuepress'
    }
  },

  /** 主题配置 */
  themeConfig: {
    /** 网站的logo */
    logo: '/logo.svg',

    /** 头部导航栏的配置 */
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide.html' },
      { text: '配置', link: '/api.html' }
    ],

    /** 侧边栏配置 */
    sidebar: {
      '/': ['', 'guide', 'api']
    },

    /** 语言设置 */
    locales: {
      /** 英文设置 */
      '/en/': {
        /** 该语言下头部导航栏的配置 */
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide.html' },
          { text: 'Config', link: '/en/api.html' }
        ],

        /** 该语言下侧边栏的配置 */
        sidebar: {
          '/en/': ['', 'guide', 'api']
        }
      }
    },

    /** repo地址 */
    repo: 'https://github.com/mister-hope/vuepress-theme-hope',

    /** 文档目录 */
    docsDir: 'docs/share'
  }
});
