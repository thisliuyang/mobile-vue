<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {}
  },
  methods: {
    btn () {
      Toast('提示信息')
    }
  }
}
</script>
<style scoped>
html {
  touch-action: none;
}
</style>
