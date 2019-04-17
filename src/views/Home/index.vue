<template>
  <div>
    <AppSwiper :swiperList="lunBoTu"></AppSwiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/newlist">
          <img src="@/assets/images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/photolist">
          <img src="@/assets/images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/goodslist">
          <img src="@/assets/images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="@/assets/images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="@/assets/images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="@/assets/images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { getLunBotu } from '@/api/index.js'
import AppSwiper from '@/components/swiper'
export default {
  name: 'Home',
  data () {
    return {
      lunBoTu: []
    }
  },
  components: {
    AppSwiper
  },
  created () {
    this.loadLunBoTu()
  },
  methods: {
    async loadLunBoTu () {
      let { data } = await getLunBotu()
      data.message = [
        {
          id: 1,
          img: 'https://i1.mifile.cn/a4/xmad_15531616096346_mMwvn.jpg',
          url: 'https://thisliuyang.cn'
        },
        {
          id: 2,
          img: 'https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg',
          url: 'https://thisliuyang.cn'
        },
        {
          id: 3,
          img: 'https://i1.mifile.cn/a4/xmad_15548066591437_Stxlj.jpg',
          url: 'https://thisliuyang.cn'
        }
      ]
      this.lunBoTu = data.message
    }
  }
}
</script>
<style lang="less" scoped>

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-table-view-cell {
  img {
    width: 60px;
  }
}
</style>
