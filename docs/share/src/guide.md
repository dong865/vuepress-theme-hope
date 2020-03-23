# 分享插件

本页面就使用了分享插件，你可以分享本页面来查看效果。

## 分享详情的配置

### 分享链接

默认为当前页面链接。如果你想在某些页面上自定义它，可以在页面的 frontmatter 中使用 `shareUrl` 字段来指定一个新值。

### 分享标题

默认为当前页面的标题，如果你想在某些页面上自定义它，可以在页面的 frontmatter 中使用 `shareTitle` 字段来指定一个新值。

### 分享描述

一般情况下，你需要在页面的 frontmatter 中使用 `shareDescription` 字段来设置它。如果没有设置，它会回退到主题设置中提供的 `description`。这在大多数情况可能都不是你想要的描述。

### 分享封面

在正常情况下，你应该在页面的 frontmatter 中使用 `shareImage` 字段来指定封面图。

同时，你也可以在插件选项中通过 `fallbackImage` 选项来指定一个默认的封面。

如果你没有提供 `fallbackImage`，则它会默认为 `/logo.png`。

### 分享引用

这个选项是给 Facebook 准备的，你可以在在页面的 frontmatter 中使用 `shareQuote` 字段来指定它。在未设置的情况下，如果插件配置的 `autoQuote` 为 `true`，该值会回退到页面的分享描述值。

### 分享标签

这个选项是给 Facebook 和 Twitter 准备的，你可以在在页面的 frontmatter 中使用 `shareTags` 字段来指定它。在未设置的情况下，该值会回退到 HTML中的 `<meta keywords>`。

::: tip
为了和部分博客插件兼容，在回退到`<meta keywords>` 前会先检查并使用 `tag` 和 `tags` 的值。
:::

## 禁用特定页面

你应该在页面的 frontmatter 中设置 `shareDisable` 字段来禁用该页面的分享。

## 分享途径的选择

你可以传递 `content` 选项来自定义你想要启用的分享媒体。默认的配置为 `['qq', ''weibo']`。

下面的例子会启用 facebook 与 twitter：

```js
// .vuepress/config.js
module.exports = {
  plugin: ['@mr-hope/share'{
    content: ['facebook', 'twitter']
  }]
};
```

::: warning
为了更好的使用 twitter 和 weibo，你应该通过 `twitterUser` 和 `weiboAppKey` 设置你 twitter 的用户名称和 weibo 的 APPkey
:::

## 分享途径的扩展

有些时候，预设的分享途径可能不能满足你的需求。在这种情况下，你可以在插件选项中通过 `extendShareList` 选项来对默认的分享途径进行扩展。

::: tip
请注意，你仍需要在 `content` 字段去手动启用它来让它生效
:::

### 扩展所需字段

你应该提供以下字段：

- sharUrl: 分享链接

  以下字段会被自动替换：

  @url url
  
  @title title
  
  @media media
  
  @description description
  
  @quote quote
  
  @hashtags hashtags

- type

  有两个可选值

  - popup: 为分享行为打开一个新的窗口

  - direct: 在本窗口打开分享行为

- icon

  分享图标，接受svg字符串或者一个 url 路径

## 特殊社交的配置

Facebook 拥有 ”分享描述“ 字段，为了追求更好的分享体验，你可以在页面的 frontmatter 中使用 `shareDescription` 字段来指定它，否则该字段会默认回退到页面的 `description` 内容。

## 其他外观配置

有时你可能不希望多色的分享图标，而是希望他们跟随主题色。

你可以通过在插件选项中设置 `isPlain` 为 `true` 来做到这一点。
