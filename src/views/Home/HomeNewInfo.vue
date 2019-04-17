<template>
  <div class="news-container">
    <h3 class="title">{{newsContent.title}}</h3>
    <p class="subtitle">
      <span>发表时间: {{newsContent.add_time | dateFormat}}</span>
      <span>点击:{{newsContent.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsContent.content"></div>
    <AppComment :newsId="newsId"/>
  </div>
</template>
<script>
import { getNews } from '@/api'
import AppComment from './AppComment'
export default {
  components: {
    AppComment
  },
  data () {
    return {
      newsId: this.$route.params.id,
      newsContent: {},
      news: ''
    }
  },
  created () {
    this.loadNews()
  },
  methods: {
    async loadNews () {
      let { message, status } = await getNews(this.newsId)
      if (status === 0) {
        this.newsContent = message[0]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.news-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
  }
}
</style>
