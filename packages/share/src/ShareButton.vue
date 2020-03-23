<template>
  <li :key="shareConfig.name" class="share-item" role="option">
    <button
      class="btn"
      :data-action="shareConfig.type === 'popup' ? null : shareConfig.action"
      :data-link="shareConfig.type === 'popup' ? `#share-${shareConfig.name}` : shareUrl"
      :title="shareConfig.name"
      role="button"
      type="button"
      @click="shareAction"
    >
      <span
        v-if="isSvgIcon"
        :style="{ color: shareOption.isPlain ? false : shareConfig.color }"
        class="icon"
        focusable="false"
        v-html="shareConfig.icon"
      />

      <span v-else :style="{ backgroundImage: `url(${shareConfig.icon})` }" class="share-icon-img" />
    </button>
  </li>
</template>

<script lang='ts'>
/* global SHARE_OPTION */
import { Component, Prop, Vue } from 'vue-property-decorator';
import { resolve } from 'path';

@Component
export default class ShareButton extends Vue {
  /** 分享配置 */
  @Prop({
    type: Object,
    validator: shareConfig => shareConfig.shareUrl && shareConfig.icon,
    required: true
  })
  private readonly shareConfig!: any;

  @Prop({
    type: Object,
    required: true
  })
  private readonly popup!: any;

  /** 分享设置 */
  private shareOption = SHARE_OPTION;

  /** 是否是 SVG 图标 */
  private get isSvgIcon() {
    return /<svg (.*?)>(.*?)<\/svg>/iu.test(this.shareConfig.icon);
  }

  /** 分享标题 */
  private get title() {
    return (
      this.$frontmatter.shareTitle || this.$frontmatter.title || this.$title
    );
  }

  /** 分享地址 */
  private get url() {
    return this.$frontmatter.shareUrl || (window ? window.location.href : '');
  }

  /** 分享详情 */
  private get description() {
    return this.$frontmatter.shareDesc || this.getMetaContentByName('description') || this.$description;
  }

  private get media() {
    /** 媒体地址 */
    const mediaUrl =
      this.$frontmatter.shareImage || this.shareOption.fallbackImage;
    /** 是否为外部链接 */
    const isExternalUrl = (url: string) =>
      /^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/u.test(url);

    if (!mediaUrl) return '';
    if (isExternalUrl(mediaUrl)) return mediaUrl;

    /** 真实地址 */
    const realUrl = window
      ? resolve(window.location.origin, mediaUrl)
      : '';

    return realUrl;
  }

  /** for facebook */
  private get quote() {
    return (
      this.$frontmatter.shareQuote ||
      (this.shareOption.autoQuote ? this.description : '')
    );
  }

  /** facebook twitter tags */
  private get hashtags() {
    const shareTags =
      this.$frontmatter.shareTags ||
      this.$frontmatter.tag ||
      this.shareOption.tags ||
      this.getMetaContentByName('keywords');

    if (Array.isArray(shareTags)) return shareTags.join(',');

    if (typeof shareTags === 'string') return shareTags.replace(/\s/gu, '');

    return '';
  }

  /**
   * Return meta content in browser by name
   */
  private getMetaContentByName(name: string) {
    return typeof window === 'undefined'
      ? ''
      : document.getElementsByName(name)[0]
        ? (document.getElementsByName(name)[0] as any).content
        : '';
  }

  /** 分享地址 */
  private get shareUrl() {
    const { shareUrl, name } = this.shareConfig;
    const { url, title, description, media, quote, hashtags } = this;
    const { weiboAppKey, twitterUser } = this.shareOption;

    return (
      /**
       * On IOS, Twitter sharing should't have a empty hashtag parameter
       * See https://guithub.com/nicolasbeauvais/vue-social-sharing/issues/143
       */
      ['twitter'].includes(name) && !hashtags.length ? shareUrl.replace('&hashtags=@hashtags', '') : shareUrl
    )
      .replace(/@url/gu, encodeURIComponent(url))
      .replace(/@title/gu, encodeURIComponent(title))
      .replace(/@media/gu, media)
      .replace(/@description/gu, encodeURIComponent(description))
      .replace(/@quote/gu, encodeURIComponent(quote))
      .replace(/@hashtags/gu, this.generateHashTags(hashtags))
      .replace(/@appkey/gu, weiboAppKey ? `&appkey=${weiboAppKey}` : '')
      .replace(/@twitteruser/gu, twitterUser ? `&via=${twitterUser}` : '');
  }

  /**
   * 为特定的社交网络编码 hashTag
   *
   * @param hashtags All hashtags specified
   *
   * @returns hashtags string
   */
  private generateHashTags(hashtags = '') {
    const { name } = this.share;

    if (name === 'facebook' && hashtags.length)
      return `%23${hashtags.split(',')[0]}`;

    return hashtags;
  }

  /**
   * Opens sharer popup
   *
   * @param shareUrl target sharer url
   */
  private share(shareUrl: string) {
    // If a popup window already exist it will be replaced, trigger a close event
    let popupWindow: Window | undefined;

    popupWindow = window.open(
      shareUrl,
      'sharer',
      `status=no,height=${this.popup.height},width=${this.popup.width},resizable=no,left=${this.popup.left},top=${this.popup.top},screenX=${this.popup.left},screenY=${this.popup.top},toolbar=no,menubar=no,scrollbars=no,location=no,directories=no`
    ) as Window;

    popupWindow.focus();

    // Create an interval to detect popup closing event
    const interval = setInterval(() => {
      if (popupWindow && popupWindow.closed) {
        clearInterval(interval);

        popupWindow = undefined;
      }
    }, 500);
  }

  /** 分享操作 */
  private shareAction() {
    const { type } = this.shareConfig;

    if (type === 'popup') this.share(this.shareUrl);
    else if (type === 'direct') window.open(this.shareUrl, '_self');
  }
}
</script>
<style lang="stylus">
.share-ctn
  .share-item
    position relative
    display block
    vertical-align middle

  .icon
    svg
      width 1em
      height 1em

  .share-icon-img
    position absolute
    top 50%
    left 50%
    display block
    width 1em
    height 1em
    margin -0.5em 0 0 -0.5em
    background-repeat no-repeat
    background-position center
    background-size contain
</style>
