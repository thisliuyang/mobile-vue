<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <AppSwiper :swiperList="loadLunBoTuList"></AppSwiper>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价: <del>￥2399</del>&nbsp;&nbsp;销售价： <span class="now_price">9999</span>
          </p>
          <p class="number">
            购买数量：
            <AppNumbox></AppNumbox>
            <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <span v-show="ballFlag" class="ball"></span>
            </transition>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:</p>
          <p>库存情况:</p>
          <p>上架时间:</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="primary" size="large" plain @click="goComment()">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getThumimages, getGoodinfo } from '@/api'
import AppSwiper from '@/components/swiper'
import AppNumbox from '@/components/numbox'
export default {
  components: {
    AppSwiper,
    AppNumbox
  },
  data () {
    return {
      id: this.$route.params.id,
      loadLunBoTuList: [],
      ballFlag: false // 控制小球显示隐藏
    }
  },
  created () {
    this.loadLunBoTu()
    this.loadGoodsInfo()
  },
  methods: {
    async loadLunBoTu () {
      let { message, status } = await getThumimages(this.id)
      console.log(status)
      if (status === 0) {
        message.forEach(item => {
          item.img = item.src
        })
        this.loadLunBoTuList = message
      }
    },
    async loadGoodsInfo () {
      let { message } = await getGoodinfo(this.id)
      console.log(message)
    },
    // 点击跳转图文介绍
    goDesc (id) {
      this.$router.push({ name: 'goodsdesc', params: { id } })
    },
    // 点击跳转评论页面
    goComment () {
      this.$router.push({ name: 'goodscomment' })
    },
    // 添加购物车
    addToShopCar () {
      this.ballFlag = !this.ballFlag
    }
  }
}
</script>
<style lang="less" scoped>
.now_price {
  color: red;
  font-size: 20px;
  font-weight: bold;
}
.mui-card-footer {
  display: block;
  button {
    margin-bottom: 20px;
  }
}
.number {
  position: relative;
}
.ball {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: red;
  position: absolute;
  z-index: 99;
  top: 10px;
  left: 50px;
}
</style>
