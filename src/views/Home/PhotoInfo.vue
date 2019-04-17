<template>
  <div class="photoInfo-container">
    <h3>{{ imageInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ imageInfo.add_time }}</span>
      <span>点击：{{ imageInfo.click }}次</span>
    </p>
    <hr>
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    <div class="content">
      {{ imageInfo.content }}
    </div>
    <AppComment :newsId="photoId"/>
  </div>
</template>
<script>
import AppComment from './AppComment'
import { getImageInfo, getThumimages } from '@/api'
export default {
  name: 'PhotoInfo',
  components: {
    AppComment
  },
  computed: {
    photoId () {
      return this.$route.params.id
    }
  },
  data () {
    return {
      imageInfo: {},
      slide1: [
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        }
      ]
    }
  },
  created () {
    this.loadImageInfo()
    this.loadThumimages()
  },
  methods: {
    async loadImageInfo () {
      let { message, status } = await getImageInfo(this.photoId)
      if (status === 0) {
        this.imageInfo = message[0]
      }
    },
    async loadThumimages () {
      let { message, status } = await getThumimages(this.photoId)
      if (status === 0) {
        message.forEach(item => {
          item.alt = 'aaa'
          item.title = 'aaa'
          item.msrc = item.src
          item.w = 400
          item.h = 300
        })
        this.slide1 = message
      }
    },
    handleClose () {
      console.log('close event')
    }
  }
}
</script>
<style lang="less" scoped>
.photoInfo-container {
  padding: 0 5px;
  h3 {
    color: blue;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
  }
}
</style>
