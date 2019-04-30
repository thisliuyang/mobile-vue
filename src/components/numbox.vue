<template>
  <div>
      <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" ref="num" type="number" value="1" @change="countChanged">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from '@/lib/mui/js/mui.js'
export default {
  data () {
    return {
      count: 1
    }
  },
  mounted () {
    mui('.mui-numbox').numbox().setOption('step', 1)
  },
  methods: {
    countChanged () {
      this.$emit('getCount', parseInt(this.$refs.num.value))
    }
  }
}
</script>
<style scoped>
</style>
