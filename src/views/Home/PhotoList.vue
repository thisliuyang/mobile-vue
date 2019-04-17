<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id===0? 'mui-active': '']"
            href="#item1mobile"
            v-for="item in imgCategory"
            :key="item.id"
            @click="loadImages(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link v-for="item in imagesList" :key="item.id" :to="'/photoinfo'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.seo_title }}</h1>
          <p class="info-content">{{ item.seo_description }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { getImgCategory, getImagesList } from '@/api'
export default {
  data () {
    return {
      imgCategory: [],
      imagesList: []
    }
  },
  created () {
    this.loadImgCategory()
    this.loadImages(0)
  },
  mounted () {
  },
  methods: {
    async loadImgCategory () {
      let { message, status } = await getImgCategory()
      if (status === 0) {
        message.unshift({ title: '全部', id: 0 })
        this.imgCategory = message
      }
    },
    async loadImages (cateid) {
      let { message, status } = await getImagesList(cateid)
      if (status === 0) {
        this.imagesList = message
      }
    }
  }
}
</script>
<style lang="less" scoped>
.photo-list {
  background-color: #fff;
  text-align: center;
  padding: 0 5px;
  li {
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    .info {
      position: absolute;
      bottom: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-content {
        font-size: 14px;
        color: #fff;
      }
    }
  }
  img{
    width: 100%;
  }
  img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
}

</style>
