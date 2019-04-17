<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swiperList" :key="item.img">
        <img :src="item.img" alt="京东" :class="{'full':isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ['swiperList', 'isfull'],
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    background-color: #fff;
    text-align: center;
    img {
      // width: 100%;
      height: 100%;
    }
  }
}
.full {
  width: 100%;
}
</style>
