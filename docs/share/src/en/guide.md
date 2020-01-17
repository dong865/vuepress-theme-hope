# Share Plugins

This page is useing this share plugin, you can share this page to see what it can do.

## Sharing configuration

### Share link

The default is the current page link. If you want to customize it on some pages, you can use the `shareUrl` field in the frontmatter of the page to specify a new value.

### Share title

The default is the title of the current page. If you want to customize it on some pages, you can use the `shareTitle` field in the frontmatter of the page to specify a new value.

### Share description

In general, you need to set it in the frontmatter of the page using the `shareDescription` field. If not set, it will fall back to the `description` provided in the theme settings. This may not be the description you want in most cases.

### Share cover

Under normal circumstances, you should use the `shareImage` field in the frontmatter of the page to specify the cover image.

At the same time, you can also specify a default cover by using the `fallbackImage` option in the plugin options.

If you don't provide `fallbackImage`, it will default to `/logo.png`.

### Share Quote

This option is for Facebook, you can specify it using the `shareQuote` field in the frontmatter of the page. If not set and `autoQuote` field in plugin option is `true`, the value will fall back to the **shareDescription** value of the page.

### Share tags

This option is for Facebook and Twitter. You can specify it by using the `shareTags` field in the frontmatter of the page. If not set, the value will fall back to `<meta keywords>` in the HTML.

::: tip
In order to be compatible with some blog plugins, the values ​​of `tag` and `tags` will be checked and used before falling back to `<meta keywords>`.
:::

## Disable specific pages

You should disable the sharing of the page by setting the `shareDisable` field in the frontmatter of the page.

## Share route selection

You can pass the `content` option to customize the shared media you want to enable. The default configuration is `['qq', ''weibo']`.

The following example will enable facebook and twitter:

```js
// .vuepress/config.js
module.exports = {
  plugin: ['@mr-hope/share'{
    content: ['facebook', 'twitter']
  }]
};
```

::: warning
In order to better use twitter and weibo, you should set your twitter username and weibo's APPkey via `twitterUser` and `weiboAppKey`.
:::

## Sharing path extension

Sometimes, the default sharing path may not meet your needs. In this case, you can extend the default sharing path with the `extendShareList` option in the plugin options.

::: tip
Note that you still need to manually enable it in the `content` field to make it take effect.
:::

### Expand the required fields

You should provide the following fields:

- sharUrl: share link

  The following fields are automatically replaced:

  @url url
  
  @title title
  
  @media media
  
  @description description
  
  @quote quote
  
  @hashtags hashtags

- type

  There are two optional values

  - popup: Open a new window for sharing behavior

  - direct: Open sharing behavior in this window

- icon

  Share icon, accept svg string or a url path

## Special social configuration

Facebook has a "Share Description" field. In order to pursue a better sharing experience, you can specify it in the frontmatter of the page using the `shareDescription` field, otherwise the field will fall back to the `description` content of the page by default.

## Other appearance configuration

Sometimes you may not want to share icons in multiple colors, but rather want them to follow the theme color.

You can do this by setting `isPlain` to `true` in the plugin options.
