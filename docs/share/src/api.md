# 插件 API

## 页面配置

### share

- 类型：`Boolean`
- 默认值：`true`

设置 `false` 将禁用该页面分享

### shareTitle

- 类型：`String`
- 默认值：当前页面标题

分享标题

### shareUrl

- 类型：`String`
- 默认值：当前页面地址

分享链接

### shareDesc

- 类型：`String`
- 默认值：主题设置的 `description`

分享描述

### shareImage

- 类型：`String`
- 默认值：网站 logo

分享封面

### shareQuote

- 类型：`String`
- 默认值：`shareDesc`

分享引用

### shareTags

- 类型：`String`
- 默认值：`<meta keywords>`

分享标签

## 插件配置

### content

- 类型：`String[]`
- 默认值：`['qq', ''weibo']`

可以选择的值有：

- `'qq'`
- `'weibo'`
- `'facebook'`

### extendShareList

- 类型：`extendListItem[]`
- 默认值：`['qq', ''weibo']`

分享途径的扩展

`extendListItem` 包括以下字段：

- sharUrl: 分享链接

  类型：`String`

  以下字段会被自动替换：

  @url url
  
  @title title
  
  @media media
  
  @description description
  
  @quote quote
  
  @hashtags hashtags

- type

  有两个可选值

  - `popup`: 为分享行为打开一个新的窗口

  - `direct`: 在本窗口打开分享行为

- icon

  类型：`String`

  分享图标，接受 SVG 字符串或者一个 url 路径

## fallbackImage

- 类型：`String`
- 默认值：`'/logo.png'`

默认封面图片

## isPlain

- 类型：`Boolean`
- 默认值：`false`

图标是否跟随主题色。

## autoQuote

- 类型：`Boolean`
- 默认值：`true`

是否自动设置页面引用为页面描述
