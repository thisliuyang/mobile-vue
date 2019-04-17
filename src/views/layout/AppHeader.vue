<template>
  <div class="header-content">
    <mt-header title="vue移动端" class="app-header">
      <div @click="goback" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  components: {
  },
  data () {
    return {
      data: ''
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.app-header {
  height: 50px;
}
  .header-content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
