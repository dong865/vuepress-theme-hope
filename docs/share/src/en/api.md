# Plugin API

## Page Configuration

### shareTitle

Type: `String`
Default: current page title

Share title

### shareUrl

Type: `String`
Default: current page address

Share link

### shareDescription

Type: `String`
Default: `description` for theme settings

Share description

### shareImage

Type: `String`
Default: Website logo

Share cover

### shareQuote

Type: `String`
Default: shareDescription

Share reference

### shareTags

Type: `String`
Default: `<meta keywords>`

Share tag

### shareDisable

Type: `Boolean`
Default: `false`

Disable this page sharing

## Plugin Configuration

### content

Type: `String[]`
Default: `['qq', ''weibo']`

### extendShareList

Type: `extendListItem[]`
Default: `['qq', ''weibo']`

Expansion of the sharing path

`extendListItem` includes the following fields:

- sharUrl: share link

  Type: `String`

  The following fields are automatically replaced:

  @url url
  
  @title title
  
  @media media
  
  @description description
  
  @quote quote
  
  @hashtags hashtags

- type

  There are two optional values

  - `popup`: Open a new window for sharing behavior

  - `direct`: Open sharing behavior in this window

- icon

  Type: `String`

  Share icon, accept svg string or a url path

## fallbackImage

Type: `String`
Default: `'/logo.png'`

Default cover image

## isPlain

Type: `Boolean`
Default: `false`

If The icon follows the theme color.

## autoQuote

Type: `Boolean`
Default: `true`

Whether to automatically set the share quote field as page description
