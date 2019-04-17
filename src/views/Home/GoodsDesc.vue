<template>
  <div class="goods-desc">
    <h3>{{ goodDescList[0].title}}</h3>
    <hr>
    <div v-html="goodDescList[0].content" class="content"></div>
  </div>
</template>
<script>
import { getGoodsDesc } from '@/api'
export default {
  data () {
    return {
      goodDescList: []
    }
  },
  created () {
    this.loadGoodsDesc()
  },
  methods: {
    async loadGoodsDesc () {
      let { message, status } = await getGoodsDesc(this.$route.params.id)
      if (status === 0) {
        this.goodDescList = message
      }
    }
  }
}
</script>
<style lang="less">
.goods-desc {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
}
.content {
  img {
    width: 100%;
  }
}
</style>
