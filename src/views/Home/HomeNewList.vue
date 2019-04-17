<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <router-link :to="'/newinfo' + item.id" >
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h4>{{item.title}}</h4>
            <p class='mui-ellipsis'>
              <span>{{item.add_time | dateFormat}}</span>
              <span>点击： {{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <h1>{{data}}</h1>
  </div>
</template>
<script>
import { getNewList } from '@/api'
export default {
  name: 'HomeNewList',
  data () {
    return {
      newList: [],
      data: ''
    }
  },
  created () {
    this.loadNewList()
  },
  methods: {
    async loadNewList () {
      let { message, status } = await getNewList()
      if (status === 0) {
        this.newList = message
      }
    }
  }
}
</script>
<style scoped>
.mui-ellipsis {
  display: flex;
  justify-content: space-between;
}
</style>
