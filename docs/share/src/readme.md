---
home: true
title: vuepress-plugin-share
heroImage: /logo.svg
heroText: vuepress-plugin-share
tagline: Vuepress 的分享插件
actionText: 使用说明 →
actionLink: /guide.html
features:
- title: 支持QQ、微博等国内主流媒体
  details: QQ、微博、豆瓣
- title: 大部分国外主流媒体支持
  details: facebook、line、linkinreddit、skype、telegram、twitter、whatsapp
- title: 可扩展的分享方式
  details: 你可以通过配置，扩展更多分享途径
- title: 充分的可定制配置
  details: 图标颜色，样式均可自定义
footer: MIT Licensed | Copyright © 2019-present Mr.Hope
---

## 使用插件

### 安装

```bash
npm i -D @mr-hope/vuepress-plugin-share
```

### 使用

```js
// .vuepress/config.js
module.exports = {
  plugin: ['@mr-hope/share']
};
```
