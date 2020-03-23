<template>
  <div v-if="visible" class="share-ctn">
    <div v-if="isActive" class="share">
      <ul class="share-list" role="list-box">
        <!-- <share-button
          v-for="share in shareList"
          :key="share.name"
          :share-config="share"
          :popup="popup"
        /> -->
      </ul>
    </div>
    <!-- <ShareBtn v-model="isActive" /> -->
  </div>
</template>

<script lang='ts'>
/* global SHARE_OPTION */
import { Component, Vue } from 'vue-property-decorator';
import SHARE_CONFIG from './shareConfig';
/*
 * import ShareBtn from './ShareBtn.vue';
 * import ShareButton from './ShareButton.vue';
 */
import { deepAssign } from '@mr-hope/vuepress-shared-utils';

/** 最终分享内容 */
const finalShareList = [...new Set(SHARE_OPTION.content)];

/** 最终分享配置 */
const finalConfig = deepAssign(
  SHARE_CONFIG,
  SHARE_OPTION.extendShareList || {}
);

// @Component({ components: { ShareBtn, ShareButton } })
@Component
export default class ShareCtn extends Vue {
  private shareOption = SHARE_OPTION;

  /** 分享列表 */
  private shareList = finalShareList.map((name) => ({
    name,
    ...finalConfig[name]
  }));

  private isActive = false;

  private popup = {
    width: 626,
    height: 436,
    top: 0,
    left: 0
  };

  /** 按钮是否可见 */
  private get visible() {
    return this.$frontmatter.share !== false && this.shareList.length !== 0;
  }

  private mounted() {
    if (window) {
      const {
        document: { documentElement },
        screen,
        screenTop,
        screenLeft
      } = window;
      const width =
        window.innerWidth || documentElement.clientWidth || screen.width;
      const height =
        window.innerHeight || documentElement.clientHeight || screen.height;

      this.popup.left = width / 2 - this.popup.width / 2 + screenLeft;
      this.popup.top = height / 2 - this.popup.height / 2 + screenTop;
    }
  }
}
</script>
<style lang="stylus">
.share-ctn
  position fixed
  right 0
  bottom 50%
  z-index 9999
  background-color #fff
  border 1px solid #efefef
  border-right none
  border-radius 8px 0 0 8px
  transform translate(0, 50%)
  transition all 0.3s ease-out
  box-shadow -2px 1px 6px rgba(0, 0, 0, 0.08)

  .btn
    position relative
    width 40px
    height 40px
    border-radius 3px
    padding 0
    font-family inherit
    text-align center
    background none
    border none
    box-shadow none
    outline none
    appearance none
    cursor pointer
    -webkit-tap-highlight-color rgba(0, 0, 0, 0)
    transition all 0.3s ease-out
    font-size 20px

    &:not({$prefix-class}-trigger)
      color $accentColor

      &:hover
        background-color rgba(188, 188, 188, 0.15)

  .icon
    fill currentColor
    height 50%
    width 50%
    padding 25%

  .trigger
    color lighten($textColor, 40%)

  .share
    position relative
    box-sizing border-box

    &-list
      list-style none
      padding 0
      margin 0
      line-height 1

@media screen and (max-width: $MQMobile)
  .share-ctn
    bottom 20%
    border-radius 5px 0 0 5px
    transform translate(0, 0)
    box-shadow -1px 1px 3px rgba(0, 0, 0, 0.03)

    .btn
      width 32px
      height 32px
      font-size 16px
</style>
