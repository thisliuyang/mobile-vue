<template>
  <div class="Home">
   <input v-model="keyWords" type="text" placeholder="请输入关键词"  @input="handleQuery">
   <ul>
       <li v-for="(item,index) in results" :key='index' v-html='item.name'></li>
   </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      keyWords: '',
      results: [],
      timer: ''
    }
  },
  methods: {
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    handleQuery (event) {
      this.clearTimer()
      console.log(this)
      console.log(event.timeStamp)
      this.timer = setTimeout(() => {
        console.log(event)
        axios({
          url: ' https://easy-mock.com/mock/5cb15737e4aa410a6a2c14cc/example/mock',
          method: 'GET'
        }).then(res => {
          this.changeColor(res.data.data.projects)
        })
      }, 2000)
    },

    changeColor (resultsList) {
      resultsList.map((item, index) => {
        // console.log('item', item)
        if (this.keyWords && this.keyWords.length > 0) {
          // 匹配关键字正则
          let replaceReg = new RegExp(this.keyWords, 'g')
          // 高亮替换v-html值
          let replaceString =
            '<span class="search-text">' + this.keyWords + '</span>'
          resultsList[index].name = item.name.replace(
            replaceReg,
            replaceString
          )
        }
      })
      this.results = []
      this.results = resultsList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search-text{
color: red;
}
</style>
