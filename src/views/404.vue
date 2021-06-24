<!--
 /**
  * @description: 404
  * 插图来源 https://undraw.co/search
  * 插图来源 https://www.drawkit.io/
  * @author: Kamchan
  * @update: Kamchan(2021-06-01)
  */
-->
<template>
  <div class="page_404">
    <van-image :src="require('@/assets/images/404.svg')"></van-image>
    <div class="tip">
      <span>页面丢失啦～</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss" scoped>
.page_404 {
  padding-top: 50px;
  .tip {
    text-align: center;
    padding: 20px 0;
  }
}
</style>
