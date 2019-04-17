<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList" :key="item.id">
      <router-link :to="'/goodsinfo' + item.id">
      <img :src="item.img_url" :alt="item.zhaiyao">
      </router-link>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">{{item.sell_price}}</span>
          <span class="old">{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖</span>
          <span>热卖</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { getGoods } from '@/api'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  created () {
    this.loadGoodsList()
  },
  methods: {
    async loadGoodsList () {
      let { message, status } = await getGoods()
      if (status === 0) {
        this.goodsList = message
      }
    }
  }
}
</script>
<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    .title {
      font-size: 14px;
    }
    .sell {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 7px;
          margin-left: 10px;
        }
      }

    }
    img {
      width: 100%;
    }
  }
}
</style>
