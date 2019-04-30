<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea
      v-model="commentText"
      name=""
      placeholder="最多吐槽200字"
      maxlength="200"
      id=""
      cols="30"
      rows="10"
    ></textarea>
    <mt-button type="primary" size="large" @click="handleComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="i">
        <div
          class="cmt-title"
        >第一楼&nbsp;&nbsp;用户： {{item.user_name}}&nbsp;&nbsp;发表时间{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="primary" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { addComment } from '@/api'
export default {
  props: ['newsId'],
  data () {
    return {
      pageIndex: 1,
      commentText: ''
    }
  },
  computed: {
    comments () {
      return this.$store.state.comment
    }
  },
  created () {
    this.$store.dispatch('loadComments', this.newsId, this.pageIndex)
  },
  methods: {
    getMore () {
      this.pageIndex++
      console.log(this.pageIndex)
      this.$store.dispatch('loadComments', this.newsId, this.pageIndex)
    },
    async handleComment () {
      let { status } = await addComment(this.newsId, this.commentText)
      if (status === 0) {
        let data = {
          add_time: new Date(),
          content: this.commentText,
          user_name: '帅哥'
        }
        let data2 = [data, ...this.$store.state.comment]
        this.$store.commit('setComments', data2)
        this.commentText = ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.cmt-container {
  font-size: 18px;
}
textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}

.cmt-item {
  font-size: 12px;
  .cmt-title {
    line-height: 30px;
    background-color: #ccc;
  }
  .cmt-body {
    line-height: 35px;
    text-indent: 2em;
  }
}
</style>
