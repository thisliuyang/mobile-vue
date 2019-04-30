<template>
  <div class="container">
    <AppHeader></AppHeader>
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shop">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getAllCount}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <AppBartab></AppBartab>
  </div>
</template>
<script>
import AppHeader from './AppHeader.vue'
import AppBartab from './AppBartab.vue'
export default {
  name: 'AppIndex',
  components: {
    AppHeader,
    AppBartab
  },
  data () {
    return {}
  },
  methods: {
    toHome () {
      this.$router.push('/')
      // this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.container {
  overflow-x: hidden;
  padding-bottom: 52px;
  padding-top: 50px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
</style>
